import React from "react";
import './style.css'

const Footer = ({hFooter}) => {
    return(
        <div className = 'footer'>
            {
                <p>{hFooter}</p>
            }
        </div>
    )
}
export default Footer;