import {useState} from "react";
import './style.js'
import Button from "./button";
import { ContainerBody } from "./style.js";

export const Body = ({hBody}) => {
    const [stateBody, setStateBody] = useState(true) //переменнная и функция

    const clickHandler = (event) => {
    console.log('Клик!')
   }

   if (!stateBody) {
        return <p> <Button func_state={setStateBody} stateButton = {stateBody}/> </p>
   }

    return(
        <ContainerBody>
             <p><Button func_state={setStateBody} stateButton = {stateBody}/></p>
            {stateBody && <p>{hBody}</p>}
        </ContainerBody>
    )
}
