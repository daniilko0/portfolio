import {useColorModeValue} from "@chakra-ui/react";
import React from "react";
import ChakraNextLink from "./chakra-next-link";

type Props = {
  href: string;
  path: string;
  children: React.ReactNode;
};

export const LinkItem = ({ href, path, children }: Props) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <ChakraNextLink
      p={2}
      bg={active ? "blue.800" : undefined}
      color={active ? "blue.50" : inactiveColor}
      borderRadius={5}
      href={href}
    >
      {children}
    </ChakraNextLink>
  );
};
