import React from 'react'
import PCBotton from '../components/PCBotton'

const Button1 = () => {

    const handleClick = () => {
        alert('Button clicked!')
    }

    return (
        <>
            <PCBotton
                label="Click me"
                text="Submit"
                disabled={false}
            />
        </>
    )
}

export default Button1