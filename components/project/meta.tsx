import { Badge } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Meta = ({ children }: Props) => {
  const colorSchemas = [
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink"
  ];
  return (
    <Badge
      colorScheme={
        colorSchemas[Math.floor(Math.random() * colorSchemas.length)]
      }
      variant={"outline"}
      ml={1}
      mr={3}
      my={1}
      p={1}
    >
      {children}
    </Badge>
  );
};
