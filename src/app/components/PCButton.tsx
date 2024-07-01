"use client";

import React from 'react'

type Button1Props = {
    label: string
    text: string
    disabled: boolean
}

const PCButton: React.FC<Button1Props> = ({ label, text, disabled }) => {

    const handleClick = () => {
        alert('Button clicked!')
    }
    
    return (
        <div className='text-center py-10 mr-auto'>
            <h2 className='text-xl font-bold'>Pink Button</h2>
            <p className='py-2 text-sm'>Presentational Component</p>
            <h3 className='py-2'>{label}</h3>
            <button className='bg-pink-400 p-3 mt-5 rounded-md text-white' disabled={disabled} onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default PCButton
