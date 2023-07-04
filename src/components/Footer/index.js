import React from "react";
import './style.js';
import { ContainerFooter } from "./style.js";
import {Link} from 'react-router-dom';

export const Footer = ({hFooter}) => {
    return(
    <p><ContainerFooter>
        <Link to="/">
                <p>{hFooter}</p>
        </Link>

    </ContainerFooter></p>
    )
}
