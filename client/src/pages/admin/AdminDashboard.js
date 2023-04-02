import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
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
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
