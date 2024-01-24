import React from "react";
import Todo from "./Components/Todo";
import { Route, Routes } from "react-router-dom";
import { CompletedTodos } from "./Components/CompletedTodos";

const App = () => {
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center ">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/completed" element={<CompletedTodos />} />
      </Routes>
    </div>
  );
};

export default App;
