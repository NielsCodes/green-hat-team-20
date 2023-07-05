"use client";
import { Text, Button, HStack, Input, VStack } from "@chakra-ui/react";

export default function Search() {
  return (
    <VStack width="100%">
      <HStack width="100%">
        <Input
          background="gray.50"
          placeholder="What would you like to give away?"
          pr="5"
        />
        <Button>Search</Button>
      </HStack>
      <Text>or...</Text>
      <Button>Take a picture of your items</Button>
    </VStack>
  );
}
