import Image from "next/image";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  thumbnail: string;
};

export const GridItem = ({ children, title, href, thumbnail }: Props) => {
  return (
    <Box w={"100%"}>
      <LinkBox cursor={"pointer"}>
        <Image
          src={thumbnail}
          alt={title}
          className={"grid-item-thumbnail"}
          loading={"lazy"}
          width={900}
          height={600}
        />
        <LinkOverlay href={href} target={"_blank"}>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
      </LinkBox>
      <Text fontSize={14}>{children}</Text>
    </Box>
  );
};
