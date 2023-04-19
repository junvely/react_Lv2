export const ADD_TODO = "todos/ADD_TODO";
export const DELETE_TODO = "todos/ADD_TODO";
export const DONE_TODO = "todos/ADD_TODO";

const initialTodos = [
  {
    id: Date.now(),
    title: "리액트 공부중",
    text: "재밌는 리액트 공부하기!",
    isDone: false,
  },
];

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return initialTodos;
  }
};
