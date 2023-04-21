export const ADD_TODO = "todos/ADD_TODO";
export const DELETE_TODO = "todos/DELETE_TODO";
export const TOGGLE_CHANGE = "todos/TOGGLE_CHANGE";

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

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const doneToggleChange = (payload) => {
  return {
    type: TOGGLE_CHANGE,
    payload,
  };
};

export const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const deletedTodos = state.filter((todo) => todo.id !== action.payload);
      return deletedTodos;
    case TOGGLE_CHANGE:
      const changedTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
      return changedTodos;
    default:
      return initialTodos;
  }
};
