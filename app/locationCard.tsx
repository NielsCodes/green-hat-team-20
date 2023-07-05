"use client";
import { Box, Text, VStack } from "@chakra-ui/react";

export default function LocationCard() {
  return (
    <Box bg="green.100" mt="1rem" p="4" borderRadius="sm">
      <VStack>
        <Text fontSize="md" fontWeight="bold">Location name</Text>
        <Text>Berliner Strasse 123, Berlin</Text>
      </VStack>
    </Box>
  );
}
