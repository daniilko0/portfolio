import {Box, Image, LinkBox, LinkOverlay, Spinner, Text} from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  thumbnails: [string, string];
  variant?: "default" | "tbw";
};

export const PostsGridItem = ({
  children,
  title,
  href,
  thumbnails,
  variant = "default"
}: Props) => {
  return (
    // @ts-ignore 2322
    <Box w={"100%"} align={"center"}>
      <LinkBox cursor={"pointer"}>
        {variant == "default" ? (
          <Image
            src={thumbnails[0]}
            fallbackSrc={thumbnails[1]}
            alt={title}
            style={{ borderRadius: "12px" }}
            loading={"lazy"}
            fallback={<Spinner />}
            width={320}
            height={200}
          />
        ) : variant == "tbw" ? (
          <Image
            src={thumbnails[0]}
            fallbackSrc={thumbnails[1]}
            alt={title}
            style={{ borderRadius: "12px", filter: "grayscale(100%)" }}
            loading={"lazy"}
            fallback={<Spinner />}
            width={320}
            height={200}
          />
        ) : null}

        {variant == "default" ? (
          <LinkOverlay href={href} target={"_blank"}>
            <Text mt={2}>{title}</Text>
          </LinkOverlay>
        ) : variant == "tbw" ? (
          <Text mt={2}>{title}</Text>
        ) : null}
      </LinkBox>
      <Text fontSize={14}>{children}</Text>
    </Box>
  );
};
