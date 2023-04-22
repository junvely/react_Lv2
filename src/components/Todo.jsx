import React from "react";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonBgColor, buttonHoverBgColor } from "styles/ButtonStyles";
import { deleteTodo, doneToggleChange } from "redux/modules/todos";

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
      <Link to={`/${todo.id}`}>상세보기</Link>
      <h4>{todo.title}</h4>
      <p>{todo.text}</p>
      <StButtonCon>
        <Button
          bgColor={buttonBgColor.delete}
          hoverBgColor={buttonHoverBgColor.delete}
          onClick={onClickDeleteTodo}
        >
          DELETE
        </Button>
        <Button
          onClick={onClickToggleChange}
          bgColor={
            todo.isDone === true ? buttonBgColor.done : buttonBgColor.notYet
          }
          hoverBgColor={
            todo.isDone === true
              ? buttonHoverBgColor.done
              : buttonHoverBgColor.notYet
          }
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
    margin: 10% 0;
  }
  p {
    margin: 10% 0;
  }
  a {
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
`;

const StButtonCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Todo;
