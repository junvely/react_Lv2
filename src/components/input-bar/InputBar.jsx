import Button from "components/button/Button";
import Input from "components/input/Input";
import React from "react";
import styled from "styled-components";

function InputBar() {
  return (
    <StInputBar>
      <StInputs>
        <Input>제목 :</Input>
        <Input></Input>
      </StInputs>
      <Button></Button>
    </StInputBar>
  );
}

const StInputBar = styled.div`
  padding: 3% 5%;
  display: flex;
  justify-content: space-between;
  background-color: #a879e3;
`;

const StInputs = styled.div`
  width: 50%;
  display: flex;
`;

export default InputBar;
