import {Project} from "../../types/project";
import {FC} from "react";
import {CardImage} from "../card-image";
import {Heading} from "../heading";
import {Text} from "../text";
import styled from "@emotion/styled";

interface CardProps {
    data: Project
}

const CardBody = styled.div(() => ({
    display: "flex",
    flexDirection: "column",
    width: "90%"
}))

export const Card: FC<CardProps> = ({data}) => {
    return <CardBody>
        <CardImage src={data.thumbnail}/>
        <Heading variant={"h1"}>{data.name}</Heading>
        <Text>{data.description}</Text>
    </CardBody>
}