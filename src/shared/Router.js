import React from "react";
import Detail from "pages/Detali";
import TodoListPage from "pages/TodoListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TodoListPage}></Route>
        <Route path="/:id" Component={Detail}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
