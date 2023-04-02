import React from "react";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const AdminList = () => {
  return (
    <Box>
      <VStack align={"center"}>
        <Heading>Admin Panel</Heading>
        <NavLink to={"/dashboard/admin/create-category"}>
          <Button>Create Category</Button>
        </NavLink>
        <NavLink to={"/dashboard/admin/create-product"}>
          <Button>Create Product</Button>
        </NavLink>
        <NavLink to={"/dashboard/admin/users"}>
          <Button>Users</Button>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default AdminList;
