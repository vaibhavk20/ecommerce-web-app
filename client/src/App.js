import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
