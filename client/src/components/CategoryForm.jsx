import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const CategoryForm = ({ handelSubmit, value, setValue }) => {
  return (
    <Flex as={"form"} my={10} gap={2} onSubmit={handelSubmit}>
      <FormControl>
        <Input
          placeholder="Enter new category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isRequired
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </Flex>
  );
};

export default CategoryForm;
