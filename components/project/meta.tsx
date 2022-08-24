import {Badge} from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Meta = ({ children }: Props) => {
  return (
    <Badge
      colorScheme={"blue"}
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
