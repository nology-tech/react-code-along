import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const buttonText = props.buttonText;

  let buttonStyle = styles.button;

  if (props.isSecondary) {
    buttonStyle += " " + styles.secondary;
  } else {
    buttonStyle += " " + styles.primary;
  }

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
