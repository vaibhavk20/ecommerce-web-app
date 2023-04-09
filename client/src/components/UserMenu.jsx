import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <Box>
      <VStack align={"center"}>
        <Heading>User Panel</Heading>
        <NavLink to={"/dashboard/user/profile"}>
          <Button>Profile</Button>
        </NavLink>
        <NavLink to={"/dashboard/user/orders"}>
          <Button>Orders</Button>
        </NavLink>
        <NavLink to={"/dashboard/admin/users"}>
          <Button>Users</Button>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default UserMenu;
