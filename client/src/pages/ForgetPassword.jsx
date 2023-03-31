import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
// import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(
        `http://localhost:8080/api/v1/auth/forget-password`,
        {
          email,
          newPassword,
          answer,
        }
      );
      console.log(res.data);
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

    console.log(email, newPassword);
  };
  return (
    <>
      <Box
        w={{ sm: "100%", md: "80%", lg: "40%" }}
        m={"auto"}
        alignItems={"center"}
        px={20}
      >
        <Heading my={5}>Rest Password</Heading>
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
            <FormLabel> New Password</FormLabel>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Answer</FormLabel>
            <Input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Input type={"submit"} />
          </FormControl>
        </VStack>
      </Box>
    </>
  );
};

export default ForgetPassword;
