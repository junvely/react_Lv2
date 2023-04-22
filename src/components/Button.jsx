import React from "react";
import { StButton } from "../styles/ButtonStyles";

function Button({
  children,
  onClick,
  width,
  buttonBgColor,
  buttonHoverBgColor,
}) {
  return (
    <StButton
      width={width}
      bgColor={buttonBgColor}
      hoverBgColor={buttonHoverBgColor}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

export default Button;
