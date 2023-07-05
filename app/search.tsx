"use client";
import { Button, HStack, Input, Select } from "@chakra-ui/react";

export default function Search() {
  return (
    <HStack>
      <Input
        background="gray.200"
        placeholder="What would you like to give away?"
      />
      <Select background="gray.200" maxW="40" placeholder="Range">
        <option>2km</option>
        <option>5km</option>
        <option>10km</option>
        <option>20km</option>
      </Select>
      <Button>Search</Button>
    </HStack>
  );
}
