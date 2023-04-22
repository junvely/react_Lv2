import React from "react";
import { StButton } from "./Button.styles";

function Button({ children, onClick, width, bgColor, hoverBgColor }) {
  return (
    <StButton
      width={width}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

export default Button;
