import React from 'react'

interface ButtonProps {
    buttonTitle: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={() => {
                props.onClick && props.onClick();
            }}
            style={{ backgroundColor: 'blue', color: 'white' }}>{props.buttonTitle}</button>
    )
}

export default Button