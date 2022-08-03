import {Link, useColorModeValue} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type Props = {
  href: string;
  path: string;
  children: React.ReactNode;
};

export const LinkItem = ({ href, path, children }: Props) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        borderRadius={5}
      >
        {children}
      </Link>
    </NextLink>
  );
};
