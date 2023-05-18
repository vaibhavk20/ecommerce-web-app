import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import CategoryForm from "../../components/CategoryForm";

const CreateCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const toast = useToast();

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/category/create-category`,
        {
          name,
        }
      );
      if (data?.success) {
        toast({
          title: `${name} is created.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        getAllCategory();
      } else {
        toast({
          title: data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
      toast({
        title: "An error occurred.",
        description: "somthing went wrong in input form.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `Something went wrong in getting catgeory`,
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAllCategory();
  },[]);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        setSelected(null);
        setUpdatedName("");
        toast({
          title: `${updatedName} is updated.`,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        getAllCategory();
      } else {
        toast({
          title: data.message,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: error,
        status: "success",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        // toast.success(`category is deleted`);
        toast({
          title: `Category is deleted`,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });

        getAllCategory();
      } else {
        toast({
          title: data.message,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      // toast.error();
      toast({
        title: "Somtihing went wrong",
        status: "success",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        gap={5}
        flexDirection={{ sm: "column", md: "column", lg: "row" }}
      >
        <Box
          w={{ sm: "100%", md: "100%", lg: "20%" }}
          border={"1px solid red"}
          p={5}
        >
          <AdminMenu />
        </Box>
        <Box
          w={{ sm: "100%", md: "100%", lg: "80%" }}
          border={"1px solid blue"}
          p={5}
        >
          <Box>
            <Heading>Admin Name :{auth?.user?.name}</Heading>
          </Box>
          <Box>
            <CategoryForm
              handelSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </Box>
          <>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Create Category</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Modify</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {categories?.map((ele) => (
                    <Tr key={ele.name}>
                      <Td>{ele.name}</Td>
                      <Td onClick={onOpen}>
                        <Button
                          variant={"ghost"}
                          onClick={() => setSelected(ele)}
                        >
                          Edit
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          variant={"ghost"}
                          onClick={() => handleDelete(ele._id)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
          {/* modal */}
          <>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <CategoryForm
                    handelSubmit={handleUpdate}
                    value={updatedName}
                    setValue={setUpdatedName}
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        </Box>
      </Box>
    </>
  );
};

export default CreateCategory;
