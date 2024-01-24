import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { clearCompleted } from "../redux/todosSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, Bounce } from "react-toastify";

export const CompletedTodos = () => {
  const todos = useSelector((state) => state.todos.completed);
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
    toast.error("Todo eliminate!", {
      className: "custom-toast-deleted",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  console.log(todos);

  return (
    <div className="flex flex-col items-center">
      <ToastContainer />
      <Link to="/" className="underline text-gray-200 font-light mt-2">
        Home
      </Link>
      <Title text="Todo completate" />

      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="my-4">
            <Card
              id={todo.id}
              title={todo.title}
              description={todo.description}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-200 mt-10">Nessuna todo completata</p>
      )}
      {todos.length > 0 && (
        <button
          onClick={handleClearCompleted}
          className="border border-gray-500 rounded-md text-white px-1 bg-red-900 mt-2 hover:bg-red-800 mb-4"
        >
          Elimina tutto
        </button>
      )}
    </div>
  );
};
