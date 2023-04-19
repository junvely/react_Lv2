import InputBar from "components/input-bar/InputBar";
import TodoList from "components/todo-list/TodoList";
import React from "react";
import styled from "styled-components";

function TodoListPage() {
  return (
    <StWrap>
      <nav>
        <ul>
          <li>My Todo List</li>
          <li>React</li>
        </ul>
      </nav>
      <InputBar></InputBar>
      <TodoList done={false}>Working🔥</TodoList>
      <TodoList done={true}>Done🎉</TodoList>
    </StWrap>
  );
}

const StWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 5% auto;
  background-color: #fff;
  border-radius: 10px;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 1% 3%;
  }
`;

export default TodoListPage;
