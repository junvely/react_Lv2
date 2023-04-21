import Button from "components/button/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneToggleChange } from "redux/modules/todos";
import styled from "styled-components";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const onClickDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onClickToggleChange = () => {
    dispatch(doneToggleChange(todo.id));
  };

  return (
    <StTodoCon>
      <h4>{todo.title}</h4>
      <p>{todo.text}</p>
      <StButtonCon>
        <Button type="delete" onClick={onClickDeleteTodo}>
          DELETE
        </Button>
        <Button
          type={todo.isDone === true ? "done" : "notYet"}
          onClick={onClickToggleChange}
        >
          {todo.isDone === true ? "Done" : "NotYet"}
        </Button>
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
