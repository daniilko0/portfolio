import {Container} from "../../components/container";
import {Heading} from "../../components/heading";
import {Menu} from "../../components/menu";
import {MenuItem} from "../../components/menu-item";
import {Link} from "react-scroll";

export const Header = () => {
    return <Container style={{position: "sticky", top: 0}}>
        <Heading variant={"h1"} style={{flexGrow: 1}}>dadyarri</Heading>
        <Menu>
            <MenuItem>
                <Link to={"home"} smooth>Главная</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"skills"} smooth>Навыки</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"projects"} smooth>Проекты</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"posts"} smooth>Публикации</Link>
            </MenuItem>
        </Menu>
    </Container>
}
