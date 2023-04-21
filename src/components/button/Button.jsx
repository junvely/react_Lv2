import React from "react";
import styled from "styled-components";

function Button({ children, type, onClick }) {
  const buttonWidth = ButtonStyles.width[type] || "45%";
  const buttonBgColor = ButtonStyles.bgColors[type] || "#bf79f8";
  const buttonHoverBgColor = ButtonStyles.hoverBgColor[type] || "#a235fc";

  return (
    <StButton
      width={buttonWidth}
      bgColor={buttonBgColor}
      hoverBgColor={buttonHoverBgColor}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

const ButtonStyles = {
  width: {
    add: "200px",
  },
  bgColors: {
    delete: "#ccc",
    done: "#64dc95",
    notYet: "#6736ed94",
  },
  hoverBgColor: {
    delete: "#696969",
    done: "#17d164",
    notYet: "#6836ed",
  },
};

const StButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  color: #fff;
  line-height: 40px;
  border: 1px solid;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    font-weight: 500;
    background-color: ${(props) => props.hoverBgColor};
  }
`;

export default Button;
