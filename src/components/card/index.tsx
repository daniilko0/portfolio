import {Project} from "../../types/project";
import {FC} from "react";
import {CardImage} from "../card-image";
import {Heading} from "../heading";
import {Text} from "../text";
import styled from "@emotion/styled";
import {CardLink} from "../card-link";

interface CardProps {
    data: Project
}

const CardBody = styled.div(() => ({
    display: "flex",
    flexDirection: "column",
    width: "90%"
}))

export const Card: FC<CardProps> = ({data}) => {
    return <div style={{
        width: "90%",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        padding: "20px",
        borderRadius: 10,
        margin: "20px"
    }}>
        <div style={{width: 320, height: 200, marginRight: "20px"}}>
            <CardImage src={data.thumbnail}/>
        </div>
        <CardBody>
            <Heading variant={"h1"}>{data.name}</Heading>
            {data.description.map((paragraph, index) => <Text key={index}>{paragraph}</Text>)}
            <Heading variant={"h2"}>Ссылки</Heading>
            {data.links.map((link, index) => <CardLink href={link.url} target={"_blank"} key={index}>{link.name}</CardLink>)}
        </CardBody>
    </div>
}