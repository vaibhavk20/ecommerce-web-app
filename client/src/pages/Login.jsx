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
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        toast({
          title: res.data.message,
          status: "success",
          isClosable: true,
          position: "top",
          duration: 9000,
        });

        localStorage.setItem("localAuth", JSON.stringify(res.data));
        navigate(location.state || "/");
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

    console.log(email, password);
  };
  // console.log(auth)
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box
        w={{ sm: "100%", md: "80%", lg: "40%" }}
        m={"auto"}
        alignItems={"center"}
        px={20}
      >
        <Heading my={5}>Login</Heading>
        <VStack as="form" onSubmit={handleSubmit} gap={2}>
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
            <Input type={"submit"} />
          </FormControl>
          <Link to="/register">Create an account</Link>
        </VStack>
      </Box>
    </>
  );
};

export default Login;
