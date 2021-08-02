import React from 'react';
import style from "./Button.module.scss"

const Button = (props) => {
    const buttonText = props.buttonText

    let buttonStyle = ''

    props.isSecondary?buttonStyle = style.buttonSecondary:buttonStyle = style.buttonPrimary

    return (
        <button className={buttonStyle} >{buttonText}</button>
    )
}

export default Button
