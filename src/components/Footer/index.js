import React from "react";
import './style.js';
import { ContainerFooter } from "./style.js";

export const Footer = ({hFooter}) => {
    return(
    <p><ContainerFooter>
        <p>{hFooter}</p>
    </ContainerFooter></p>
    )
}
