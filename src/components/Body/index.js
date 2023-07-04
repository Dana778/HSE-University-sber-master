import {useState} from "react";
import './style.css'
import Button from "./button";

const Body = ({hBody}) => {
    const [stateBody, setStateBody] = useState(false) //переменнная и функция

    

    /*   var clickHandler = function(event){
        console.log('Клик!')
    }
    */
    var clickHandler = (event) => {
    console.log('Клик!')
   }

   if (!stateBody) {
        return <p> <Button func_state={setStateBody} stateButton = {stateBody}/> </p>
   }

    return(
        
        <div className = 'body'>
            {stateBody && <p>{hBody}</p>}
            <Button func_state={setStateBody} stateButton = {stateBody}/>
        </div>
    )
}
export default Body;