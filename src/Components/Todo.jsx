import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { CardForm } from "./CardForm";
import { deleteTodo } from "../redux/todosSlice";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="flex flex-col items-center">
      <Link
        to="/completed"
        className=" underline text-gray-200 font-light mt-2"
      >
        Completed
      </Link>
      <Title text="Todo List" />

      <CardForm />

      <ToastContainer />

      <div className="flex flex-col items-center justify-center flex-wrap gap-10 mt-8 ">
        {todos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isMapped={true}
            description={todo.description}
            isDone={todo.isDone}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
