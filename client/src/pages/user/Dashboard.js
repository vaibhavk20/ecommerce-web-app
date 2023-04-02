import { Box, Heading } from "@chakra-ui/react";
import UserMenu from "../../components/UserMenu";

const Dashboard = () => {
  return (
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
        <UserMenu />
      </Box>
      <Box
        w={{ sm: "100%", md: "100%", lg: "80%" }}
        border={"1px solid blue"}
        p={5}
      >
        <Box>
          <Heading>Dashboard</Heading>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
