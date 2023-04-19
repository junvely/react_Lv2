import Todo from "components/todo/Todo";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function TodoList({ children, done }) {
  const todos = useSelector((state) => state.todos);
  return (
    <StTodoListCon>
      <h3>{children}</h3>
      <StFlexCon>
        {done === true &&
          todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return <Todo key={todo.id} todo={todo}></Todo>;
            })}
        {done === false &&
          todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return <Todo key={todo.id} todo={todo}></Todo>;
            })}
      </StFlexCon>
    </StTodoListCon>
  );
}

const StTodoListCon = styled.div`
  padding: 3% 5%;

  h3 {
    font-size: 32px;
    margin-bottom: 5%;
  }
`;

const StFlexCon = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default TodoList;
