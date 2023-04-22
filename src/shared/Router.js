import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "pages/TodoListPage";
import DetailPage from "pages/DetaliPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TodoListPage}></Route>
        <Route path="/:id" Component={DetailPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
