import "./Button.scss";

const Button = (props) => {
  const buttonText = props.buttonText;

  let buttonStyle = "button";

  if (props.isSecondary) {
    buttonStyle += " secondary";
  } else {
    buttonStyle += " primary";
  }

  // This could be simplified using a inline turnery statement.
  // let buttonStyle = props.isSecondary ? "button secondary" : "button primary";

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
