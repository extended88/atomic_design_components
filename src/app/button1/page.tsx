import React from 'react'
import PCButton from '../components/PCButton'

const Button1 = () => {

    return (
        <>
            <PCButton
                label="Click me"
                text="Submit"
                disabled={false}
            />
        </>
    )
}

export default Button1