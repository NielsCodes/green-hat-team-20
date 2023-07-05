"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function LocationCard() {
  return (
    <Box bg="green.100" mt="1rem" p="4" borderRadius="md">
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
          <Text fontWeight="bold" fontSize="md">
            Location name
          </Text>
          <Text>Berliner Strasse 123, Berlin</Text>
        </VStack>
        <Flex
          bg="green.50"
          p="2"
          borderRadius="md"
          height="100%"
          aspectRatio="1/1"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold">10km</Text>
        </Flex>
      </HStack>
    </Box>
  );
}
