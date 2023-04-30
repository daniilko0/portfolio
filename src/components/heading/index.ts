import styled from "@emotion/styled";

interface HeadingProps {
    variant: "h1" | "h2"
}

export const Heading = styled.h1((props: HeadingProps) => ({
    fontSize: props.variant == "h1" ? 30 : 24,
    fontWeight: props.variant == "h1" ? 700 : 400,
    margin: 0,
    fontFamily: ["Fira Code", "monospace"]
}))