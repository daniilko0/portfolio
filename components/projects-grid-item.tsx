import {
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Meta } from "./project/meta";
import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnails?: [string, string];
  labels: string[];
};

export const ProjectsGridItem = ({
  children,
  id,
  title,
  thumbnails,
  labels
}: Props) => {
  return (
    // @ts-ignore 2322
    <Box w={"100%"} align={"center"}>
      <NextLink href={`/project/${id}`}>
        <LinkBox cursor={"pointer"}>
          <Image
            src={
              thumbnails
                ? thumbnails[0]
                : "/images/common/webp/placeholder.webp"
            }
            fallbackSrc={
              thumbnails ? thumbnails[1] : "/images/common/png/placeholder.png"
            }
            alt={title}
            className={"grid-item-thumbnail"}
            loading={"lazy"}
            fallback={<Spinner />}
            width={320}
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
      {labels
        ? labels.map((label, _) => <Meta key={label}>{label}</Meta>)
        : null}
    </Box>
  );
};
