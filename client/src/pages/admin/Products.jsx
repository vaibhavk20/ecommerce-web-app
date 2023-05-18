import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import AdminMenu from "../../components/AdminMenu";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      // toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Box display={"flex"} gap={5} flexDirection={["column", "column", "row"]}>
        <Box
          w={{ sm: "100%", md: "100%", lg: "20%" }}
          border={"1px solid red"}
          p={5}
        >
          <AdminMenu />
        </Box>
        <Box w={["100%", "100%", "80%"]} border={"1px solid blue"} p={5}>
          <Box>
            <Heading>All Products list</Heading>
          </Box>

          {/* products */}
          <Box
            display={"grid"}
            gap={4}
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
            ]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {products?.map((p) => (
              <NavLink to={`/dashboard/admin/product/${p.slug}`}>
                <Card maxW="sm">
                  <CardBody>
                    <Box maxW={"200px"}>
                      <Image
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        borderRadius="lg"
                      />
                    </Box>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{p.name}</Heading>
                      <Text>{p.description}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </NavLink>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
