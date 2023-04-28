import {Container} from "../container";
import {Heading} from "../heading";
import {Menu} from "../menu";
import {MenuItem} from "../menu-item";

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
