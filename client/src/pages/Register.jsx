import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Register = () => {
  return (
    <Box w={"40%"} m={"auto"} alignItems={"center"} px={20}>
      <Heading my={5}>Register</Heading>
      <FormControl gap={2}>
        <FormLabel>Name</FormLabel>
        <Input type="text" />

        <FormLabel>Email address</FormLabel>
        <Input type="email" />

        <FormLabel>Password</FormLabel>
        <Input type="password" />

        <FormLabel>Phone</FormLabel>
        <Input type="Tel" />

        <FormLabel>Address</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button my={5}>Register</Button>
    </Box>
  );
};

export default Register;
