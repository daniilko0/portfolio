import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";
import {SocialLink} from "../../components/social-link";
import {Container} from "../../components/container";
import {Tooltip} from "react-tooltip";
import skills from "../../data/skills.tsx";

export const Skills = () => {
    return <Element name={"skills"}>
        <Block>
            <Heading variant={"h1"}>Навыки</Heading>
            <Container>
                {skills.map((skill) => <>
                    <SocialLink>
                        <a data-tooltip-id={skill.id} data-tooltip-content={skill.tooltip}>
                            {skill.icon}
                        </a>
                    </SocialLink>
                    <Tooltip id={skill.id} style={{fontFamily: "Fira Code"}}/>
                </>)}
            </Container>
        </Block>
    </Element>
}