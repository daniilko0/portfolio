import styled from "@emotion/styled";
import {Container} from "../container";

export const Block = styled(Container)(() => ({
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: "90vh",
    width: "95%",
    margin: 0
}))