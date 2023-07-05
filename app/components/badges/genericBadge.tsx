import { Badge } from "@chakra-ui/react";
import React from "react";

type ChakraBadgeProps = React.ComponentProps<typeof Badge>;
type ChakraColorScheme = ChakraBadgeProps["colorScheme"];

export type GenericBadgeProps = {
  text: string;
  colorScheme: ChakraColorScheme;
};

export default function GenericBadge({ text, colorScheme }: GenericBadgeProps) {
  return (
    <Badge variant="subtle" colorScheme={colorScheme}>
      {text}
    </Badge>
  );
}
