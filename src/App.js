import "App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import todoList from "todo-list";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={todoList}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
