import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Meta } from "./project/meta";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail?: string;
  labels: string[];
};

export const ProjectsGridItem = ({
  children,
  id,
  title,
  thumbnail,
  labels
}: Props) => {
  return (
    // @ts-ignore 2322
    <Box w={"100%"} align={"center"}>
      <NextLink href={`/project/${id}`}>
        <LinkBox cursor={"pointer"}>
          <Image
            src={thumbnail ? thumbnail : "/images/placeholder.png"}
            alt={title}
            className={"grid-item-thumbnail"}
            loading={"lazy"}
            width={200}
            height={200}
          />
          <LinkOverlay href={`/project/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
      {labels ? labels.map((label, _) => <Meta>{label}</Meta>) : null}
    </Box>
  );
};
