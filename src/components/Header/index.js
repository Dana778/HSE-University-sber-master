import React from "react";
import './style.js';
import { ContainerHeader } from "./style.js";
import {Link} from 'react-router-dom';

export const Header = ({hHeader}) => {
    return(
        <ContainerHeader>
            <p>{hHeader}</p>
        </ContainerHeader>
    )
}
