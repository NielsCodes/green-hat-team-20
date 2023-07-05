"use client";
import {
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";

export default function Search() {
  return (
    <HStack>
      <Input
        background="gray.200"
        placeholder="What would you like to give away?"
        pr="5"
      />
      <Button>Search</Button>
    </HStack>
  );
}
