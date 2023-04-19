import Todo from "components/todo/Todo";
import React from "react";
import styled from "styled-components";

function TodoList() {
  return (
    <StTodoListCon>
      <h3>TODOLIST</h3>
      <StTodosCon>
        <Todo></Todo>
      </StTodosCon>
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

const StTodosCon = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default TodoList;
