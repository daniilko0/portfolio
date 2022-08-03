import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
  alt: string;
};

export const ProjectImage = ({ src, alt }: Props) => (
  <Image borderRadius={"lg"} w={"full"} src={src} alt={alt} mb={4} />
);
