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
                <Link to={"home"} smooth={true}>Главная</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"skills"} smooth={true}>Навыки</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"projects"} smooth={true}>Проекты</Link>
            </MenuItem>
            <MenuItem>
                <Link to={"posts"} smooth={true}>Публикации</Link>
            </MenuItem>
        </Menu>
    </Container>
}
