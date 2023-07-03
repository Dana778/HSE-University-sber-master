import React from "react";
import './style.css'
const Header = ({hHeader}) => {
    return(
        <div className = 'header'>
            {
                <p>{hHeader}</p>
            }
        </div>
    )
}
export default Header;