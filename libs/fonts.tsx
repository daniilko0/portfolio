import { Global, css } from "@emotion/react";
import React from "react";

const Font = css(`
    @import url('https://fonts.googleapis.com/css2?family=Bellota:wght@400;700&display=swap');
`);

const Fonts = () => <Global styles={Font} />;

export default Fonts;
