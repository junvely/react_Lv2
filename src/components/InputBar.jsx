import Button from "components/Button";
import Input from "components/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";
import styled from "styled-components";
import { width } from "styles/them";

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

  const onClickAddTodo = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.text) {
      alert("제목과 내용을 모두 입력해 주세요");
      return;
    }
    dispatch(addTodo(todo));
    setTodo(initialTodo);
  };

  return (
    <StFormCon>
      <StInputCon>
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
      </StInputCon>
      <Button width={width.small} onClick={onClickAddTodo}>
        추가하기
      </Button>
    </StFormCon>
  );
}

const StFormCon = styled.form`
  padding: 3% 5%;
  display: flex;
  justify-content: space-between;
  background-color: #a879e3;
`;

const StInputCon = styled.div`
  width: 50%;
  display: flex;
`;

export default InputBar;
