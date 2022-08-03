import {
  Box,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
  Image
} from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  thumbnail: string;
};

export const GridItem = ({ children, title, href, thumbnail }: Props) => {
  return (
    // @ts-ignore 2322
    <Box w={"100%"} align={"center"}>
      <LinkBox cursor={"pointer"}>
        <Image
          src={thumbnail}
          alt={title}
          className={"grid-item-thumbnail"}
          loading={"lazy"}
          fallback={<Spinner />}
          width={300}
          height={150}
        />
        <LinkOverlay href={href} target={"_blank"}>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
      </LinkBox>
      <Text fontSize={14}>{children}</Text>
    </Box>
  );
};
