import {motion} from "framer-motion";
import Head from "next/head";
import React from "react";
import {GridItemStyle} from "../grid-item-style";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
};

type Props = {
  children: React.ReactNode;
  title?: string;
  overrideTitle?: string;
};

const Layout = ({ children, title, overrideTitle }: Props) => {
  let tlt = "";
  if (overrideTitle) {
    tlt = overrideTitle;
  } else if (title) {
    tlt = `${title} - dadyarri`;
  }

  return (
    <motion.article
      initial={"hidden"}
      animate={"enter"}
      exit={"exit"}
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {tlt && (
          <Head>
            <title>{tlt}</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;
