const Button = ({func_state, stateButton}) => {
    const buttonClick = () => {
        console.log(func_state)
        func_state(!stateButton)
    }

    return <button className='button' onClick={buttonClick}>
        {stateButton ? 'я видна' : 'я спрятана'}
    </button>
}

export default Button