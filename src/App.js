import "App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "todoListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={TodoListPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
