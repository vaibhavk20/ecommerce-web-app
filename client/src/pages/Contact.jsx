import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Box
        display={"flex"}
        w={"80%"}
        m={"auto"}
        py={20}
        gap={12}
        flexDir={{ sm: "column-reverse", md: "column-reverse", lg: "row" }}
      >
        <Box>
          <Image maxW={"100%"} src={"/images/contactus.jpeg"} alt="support" />
        </Box>
        <VStack
          align={"left"}
          fontSize={{ sm: "1rem", md: "1rem", lg: "1.2rem" }}
          fontWeight={700}
        >
          <Box border={"1px solid"} py={2} px={20}>
            <Heading>Contact</Heading>
          </Box>
          <Text>
            any query and info about product feel free to call anytime we 24X7
          </Text>
          <HStack>
            <BiMailSend />
            <Text>: www.help@ecommerce.com</Text>
          </HStack>
          <HStack>
            <BiPhoneCall />
            <Text>: 120-888-0000</Text>
          </HStack>
          <HStack>
            <BiSupport />
            <Text>: 1800-8888-0000</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
