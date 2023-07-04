import { ContainerButton } from "./style.js";
const Button = ({func_state, stateButton}) => {
    const buttonClick = () => {
        console.log(func_state)
        func_state(!stateButton)
        window.location.replace('/dashboard')
    }

    return <ContainerButton onClick={buttonClick}>
        {stateButton ? 'я видна' : 'я спрятана'}
    </ContainerButton>
}

export default Button