import React from "react";
import styled from "styled-components";

function Input() {
  return (
    <StInputCon>
      <label htmlFor=""></label>
      <StInput></StInput>
    </StInputCon>
  );
}

const StInputCon = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 10%;

  .label {
    width: 50px;
    display: block;
    color: #fff;
    font-weight: 400;
  }
`;

const StInput = styled.input`
  padding: 0 10px;
  line-height: 30px;
  border-radius: 5px;
  background-color: #fff;
`;

export default Input;
