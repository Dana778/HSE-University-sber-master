import React from "react";
import './style.js';
import { ContainerHeader } from "./style.js";


export const Header = ({hHeader}) => {
    return(
        <ContainerHeader>
            <p>{hHeader}</p>
        </ContainerHeader>
    )
}
