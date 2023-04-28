import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";

export const Home = () => {
    return <Element name={"home"}>
        <Block>
            <Heading variant={"h1"} style={{padding: 5}}>Даниил Голубев</Heading>
            <Heading variant={"h2"} style={{padding: 5}}>Бэкенд-разработчик</Heading>
        </Block>
    </Element>
}
