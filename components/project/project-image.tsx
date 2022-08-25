import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  srcs: [string, string];
  alt: string;
};

export const ProjectImage = ({ srcs, alt }: Props) => {
  return (
    <Image
      borderRadius={"lg"}
      w={"full"}
      src={srcs[0]}
      fallbackSrc={srcs[1]}
      alt={alt}
      mb={4}
    />
  );
};
