import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box my={32}>
      <VStack spacing={5}>
        <Heading>404</Heading>
        <Heading>Oops! Page Not Found</Heading>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default PageNotFound;
