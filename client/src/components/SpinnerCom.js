import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SpinnerCom = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });

    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, [count, navigate, location]);

  return (
    <Box
      mt={32}
      display="flex"
      alignItems="center"
      flexDir={"column"}
      justifyContent="center"
    >
      <Text>redirect you in {count} sec</Text>
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default SpinnerCom;
