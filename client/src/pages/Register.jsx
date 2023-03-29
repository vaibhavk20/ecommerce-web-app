import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(`http://localhost:8080/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
      });
      // console.log(res.data);
      if (res.data.success) {
        toast({
          title: res.data.message,
          status: "success",
          isClosable: true,
          position: "top",
          duration: 9000,
        });
        navigate("/login");
      } else {
        toast({
          title: res.data.message,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 9000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      w={{ sm: "100%", md: "80%", lg: "40%" }}
      m={"auto"}
      alignItems={"center"}
      px={20}
      py={5}
    >
      <Heading my={5}>Register</Heading>
      <VStack as="form" onSubmit={handleSubmit} gap={2} >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input type={"submit"} />
        </FormControl>
        <Link to="/login">Already user login here</Link>
      </VStack>
    </Box>
  );
};

export default Register;
