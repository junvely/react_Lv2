import React from "react";
import styled from "styled-components";

function Button({ children, onclick }) {
  return <StButton onClick={onclick}>{children}</StButton>;
}

const StButton = styled.button`
  width: 200px;
  line-height: 40px;
  color: #fff;
  background-color: #d8b0f8;
  border-radius: 10px;
  transition: all 0.2s;
  border: 1px solid;

  &:hover {
    font-weight: 500;
    background-color: #a879e3;
  }
`;

export default Button;
