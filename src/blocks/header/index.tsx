import {Container} from "../../components/container";
import {Heading} from "../../components/heading";
import {Menu} from "../../components/menu";
import {MenuItem} from "../../components/menu-item";

export const Header = () => {
    return <Container style={{position: "sticky", top: 0}}>
        <Heading variant={"h1"} style={{flexGrow: 1}}>dadyarri</Heading>
        <Menu>
            <MenuItem href={"#home"}>Главная</MenuItem>
            <MenuItem href={"#skills"}>Навыки</MenuItem>
            <MenuItem href={"#projects"}>Проекты</MenuItem>
            <MenuItem href={"#posts"}>Публикации</MenuItem>
        </Menu>
    </Container>
}
