"use client";

import React from 'react'
import PCButton from './PCButton';

type Button2Props = {
    label: string
    maximum: number
}

const CCbutton: React.FC<Button2Props> = ({ label, maximum }) => {


    return (
        <div>
             <PCButton
                label="Click me 2"
                text="Submit"
                disabled={false}
            />
        </div>
    )
}

export default CCbutton