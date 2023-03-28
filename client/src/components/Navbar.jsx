import React from "react";
import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      border={"1px solid"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={10}
    >
      <NavLink to="/">
        <Heading>MArt</Heading>
      </NavLink>
      <Flex right="1rem" align="center">
        {/* Desktop */}
        {/* position="fixed" top="1rem" */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <NavLink to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NavLink>

          <NavLink to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NavLink>

          <NavLink to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Register
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Login
            </Button>
          </NavLink>
        </Flex>
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NavLink to="/">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NavLink>

          <NavLink to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NavLink>

          <NavLink to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Register
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Login
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
