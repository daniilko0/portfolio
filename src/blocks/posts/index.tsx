import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";

export const Posts = () => {
    return <Element name={"posts"}>
        <Block>
            <Heading variant={"h1"}>Публикации</Heading>
        </Block>
    </Element>
}