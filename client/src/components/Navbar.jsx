import React from "react";
import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Heading,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const [auth, setAuth] = useAuth();
  const toast = useToast();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("localAuth");
    toast({
      title: "Logout successfully",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 9000,
    });
  };

  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={{ sm: 0, md: 10, lg: 10 }}
      border={"1px solid"}
      // position="fixed"
    >
      <NavLink to="/">
        <Heading>MArt</Heading>
      </NavLink>
      <Flex alignItems={"center"}>
        {/* Desktop */}
        {/* position="fixed" top="1rem" */}
        <Flex display={["none", "none", "flex", "flex"]} alignItems={"center"}>
          <NavLink to="/">
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NavLink>

          <NavLink to="/about">
            <Button variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NavLink>

          <NavLink to="/contact">
            <Button variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NavLink>

          {!auth.user ? (
            <>
              <NavLink to="/register">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  Register
                </Button>
              </NavLink>
              <NavLink to="/login">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  Login
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="orange"
                  rightIcon={<ChevronDownIcon />}
                  mx={5}
                >
                  {auth?.user?.name}
                </MenuButton>
                <MenuList>
                  <NavLink
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    <MenuItem>Dashboard</MenuItem>
                  </NavLink>

                  <NavLink to="/login" onClick={handleLogout}>
                    <MenuItem>Logout</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>

              {/* <NavLink to="/dashboard">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  Dashboard
                </Button>
              </NavLink>

              <NavLink to="/login" onClick={handleLogout}>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                >
                  Logout
                </Button>
              </NavLink> */}
            </>
          )}
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
          <NavLink to="/" onClick={() => changeDisplay("none")}>
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NavLink>

          <NavLink to="/about" onClick={() => changeDisplay("none")}>
            <Button variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NavLink>

          <NavLink to="/contact" onClick={() => changeDisplay("none")}>
            <Button variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NavLink>

          {!auth.user ? (
            <>
              <NavLink to="/register" onClick={() => changeDisplay("none")}>
                <Button variant="ghost" aria-label="Register" my={5} w="100%">
                  Register
                </Button>
              </NavLink>
              <NavLink to="/login" onClick={() => changeDisplay("none")}>
                <Button variant="ghost" aria-label="Login" my={5} w="100%">
                  Login
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="orange"
                  rightIcon={<ChevronDownIcon />}
                  mx={5}
                >
                  {auth?.user?.name}
                </MenuButton>
                <MenuList>
                  <NavLink
                    to="/dashboard"
                    onClick={() => changeDisplay("none")}
                  >
                    <MenuItem>Dashboard</MenuItem>
                  </NavLink>

                  <NavLink to="/login" onClick={handleLogout}>
                    <MenuItem>Logout</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
