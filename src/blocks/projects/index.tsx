import {Heading} from "../../components/heading";
import {Block} from "../../components/block";
import {Element} from "react-scroll";
import {motion, Variants} from "framer-motion";

const cardVariants: Variants = {
    offscreen: {
        x: -1000
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 2.0
        }
    }
};

export const Projects = () => {
    return <Element name={"projects"}>
        <Block>
            <Heading variant={"h1"}>Проекты</Heading>
            {["red", "green", "blue", "black"].map((color) =>
                <motion.div initial={"offscreen"} whileInView={"onscreen"}
                            viewport={{once: true, amount: 0.8}}>
                    <motion.div
                        style={{
                            background: color,
                            width: 300,
                            height: 300
                        }} variants={cardVariants}>

                    </motion.div>
                </motion.div>)}
        </Block>
    </Element>
}