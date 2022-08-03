import NextLink from "next/link";
import { Box, Heading, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Project = ({ children }: Props) => (
  <Box>
    <NextLink href={"/projects"}>
      <Link>Проекты</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display={"inline-block"} as={"h3"} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);
