import Button from "components/button/Button";
import Input from "components/input/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";
import styled from "styled-components";

function InputBar() {
  const initialTodo = {
    id: Date.now(),
    title: "",
    text: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialTodo);
  const dispatch = useDispatch();

  const handleTodoChange = (e) => {
    let { name, value } = e.target;
    const newTodo = { ...todo, [name]: value };
    setTodo(newTodo);
  };

  const onClickAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo(initialTodo);
  };

  return (
    <StInputBarCon>
      <StFlexCon>
        <Input
          name="title"
          value={todo.title}
          handleTodoChange={handleTodoChange}
        >
          제목
        </Input>
        <Input
          name="text"
          value={todo.text}
          handleTodoChange={handleTodoChange}
        >
          내용
        </Input>
      </StFlexCon>
      <Button onclick={onClickAddTodo}></Button>
    </StInputBarCon>
  );
}

const StInputBarCon = styled.div`
  padding: 3% 5%;
  display: flex;
  justify-content: space-between;
  background-color: #a879e3;
`;

const StFlexCon = styled.div`
  width: 50%;
  display: flex;
`;

export default InputBar;
