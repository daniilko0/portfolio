import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";
import projects from "../../data/projects.json"
import {Card} from "../../components/card";

export const Projects = () => {
    return <Element name={"projects"}>
        <Block>
            <Heading variant={"h1"}>Проекты</Heading>
            {projects.map(project  => <Card data={project}/>)}
        </Block>
    </Element>
}