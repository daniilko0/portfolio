import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";
import posts from "../../data/posts.json";
import {Card} from "../../components/card";

export const Posts = () => {
    return <Element name={"posts"}>
        <Block>
            <Heading variant={"h1"}>Публикации</Heading>
            {posts.map((post, index) => <Card data={post} key={index}/>)}
        </Block>
    </Element>
}