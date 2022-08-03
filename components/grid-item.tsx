import {Box, Image, LinkBox, LinkOverlay, Spinner, Text} from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  thumbnails: [string, string];
};

export const GridItem = ({ children, title, href, thumbnails }: Props) => {
  return (
    // @ts-ignore 2322
    <Box w={"100%"} align={"center"}>
      <LinkBox cursor={"pointer"}>
        <Image
          src={thumbnails[0]}
          fallbackSrc={thumbnails[1]}
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
