import Button from "components/button/Button";
import React from "react";
import styled from "styled-components";

function Todo({ todo }) {
  return (
    <StTodoCon>
      <h4>{todo.title}</h4>
      <p>{todo.text}</p>
      <StButtonCon>
        <Button></Button>
        <Button></Button>
      </StButtonCon>
    </StTodoCon>
  );
}

const StTodoCon = styled.div`
  width: 20%;
  padding: 3%;
  margin: 2%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  h4 {
    font-size: 24px;
  }
  p {
    margin: 10% 0;
  }
`;

const StButtonCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Todo;
