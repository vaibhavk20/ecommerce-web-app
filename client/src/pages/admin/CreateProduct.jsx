import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  // Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
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
  }, []);

  // console.log(photo);
  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping);

      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );

      if (data?.success) {
        // toast({
        //   title: `Product Created Successfully`,
        //   status: "Sucess",
        //   duration: 5000,
        //   position: "top",
        //   isClosable: true,
        // });
        navigate("/dashboard/admin/products");
      } else {
        // toast({
        //   title: "Error in create an product",
        //   status: "error",
        //   duration: 5000,
        //   position: "top",
        //   isClosable: true,
        // });
        console.log("Error in creating product");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `Something went wrong`,
        status: "Sucess",
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
            {/* category */}
            <Box mt={5}>
              <Select
                placeholder="Select Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories?.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </Box>
            {/* photo */}
            <Flex
              flexDirection={["column", "column", "row"]}
              justifyContent={"space-between"}
              gap={5}
              mt={5}
            >
              <Text>
                Upload
                <Input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Text>
              {/* preview */}
              {photo && (
                <Box p={5}>
                  <Image
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                  />
                </Box>
              )}
            </Flex>

            {/*  */}
            <Box mt={3}>
              <Input
                type="text"
                value={name}
                placeholder="write a name"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box mt={3}>
              <Textarea
                type="text"
                value={description}
                placeholder="write a description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>

            <Box mt={3}>
              <Input
                type="number"
                value={price}
                placeholder="write a Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
            <Box mt={3}>
              <Input
                type="number"
                value={quantity}
                placeholder="write a quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Box>

            <Box mt={3}>
              <Select
                placeholder="Select Shipping "
                onChange={(e) => {
                  setShipping(e.target.value);
                }}
              >
                <option value="0">No</option>
                <option value="1">Yes</option>
              </Select>
            </Box>

            <Box mt={3}>
              <Button onClick={handleCreate}>CREATE PRODUCT </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateProduct;
