import {Container} from "../../components/container";
import {Heading} from "../../components/heading";
import {Menu} from "../../components/menu";
import {MenuItem} from "../../components/menu-item";

export const Header = () => {
    return <Container>
        <Heading style={{flexGrow: 1}}>dadyarri</Heading>
        <Menu>
            <MenuItem href={"#"}>Главная</MenuItem>
            <MenuItem href={"#"}>Навыки</MenuItem>
            <MenuItem href={"#"}>Проекты</MenuItem>
            <MenuItem href={"#"}>Публикации</MenuItem>
        </Menu>
    </Container>
}
