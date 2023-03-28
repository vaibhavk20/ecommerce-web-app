import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <Box
      w={{ sm: "100%", md: "60%", lg: "40%" }}
      m={"auto"}
      alignItems={"center"}
      px={20}
    >
      <Heading my={5}>Register</Heading>
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
      </VStack>
    </Box>
  );
};

export default Login;
