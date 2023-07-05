"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import ClothingBadge from "./badges/clothingBadge";
import FreshFoodBadge from "./badges/freshFoodBadge";
import NonPerishFoodBadge from "./badges/nonPerishFoodBadge";
import ToysBadge from "./badges/toysBadge";
import KidsItemBadge from "./badges/kidsItemBadge";

export default function LocationCard() {
  return (
    <Box bg="gray.50" mt="1rem" p="4" borderRadius="md">
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
          <Text fontWeight="bold" fontSize="md">
            Location name
          </Text>
          <Text>Berliner Strasse 123, Berlin</Text>
          <HStack>
            <ClothingBadge />
            <FreshFoodBadge />
            <NonPerishFoodBadge />
            <ToysBadge />
            <KidsItemBadge />
          </HStack>
        </VStack>
        <Flex
          bg="green.100"
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
