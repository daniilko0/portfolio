import { Global } from "@emotion/react";
import React from "react";

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
  />
);
