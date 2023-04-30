import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";
import {SocialLink} from "../../components/social-link";
import {SlSocialGithub, SlSocialVkontakte} from "react-icons/sl";
import {Container} from "../../components/container";
import {SiTelegram} from "react-icons/si";
import {TypeAnimation} from "react-type-animation";

export const Home = () => {
    return <Element name={"home"}>
        <Block>
            <Heading variant={"h1"} style={{padding: 5}}>Даниил Голубев</Heading>
            <Heading variant={"h2"} style={{padding: 5}}>
                <TypeAnimation
                    sequence={[
                        "Бэкенд-разработчик",
                        1000,
                        "Бэкенд-разработчик (.NET)"
                    ]}
                    wrapper="span"
                    cursor={true}
                />
            </Heading>

            <Container>
                <SocialLink href={"https://vk.com/dadyarri"}>
                    <SlSocialVkontakte/>
                </SocialLink>
                <SocialLink href={"https://t.me/dadyarri"}>
                    <SiTelegram/>
                </SocialLink>
                <SocialLink href={"https://github.com/dadyarri"}>
                    <SlSocialGithub/>
                </SocialLink>
            </Container>

        </Block>
    </Element>
}
