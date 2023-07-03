import React, {useState} from "react";
import './style.css'

const Body = ({hBody}) => {
    const [stateBody, setStateBody] = useState()

    const buttonClick = () => {
        console.log(setStateBody);
        setStateBody(!stateBody);
    }
    return(
        <div className = 'body'>
            {stateBody && <p>{hBody}</p>}
            <button className='button' onClick={buttonClick}> 
                Нажми на меня 
            </button>
        </div>
    )
}
export default Body;