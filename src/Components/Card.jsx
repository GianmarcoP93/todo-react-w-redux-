import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/todosSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import "./ToastStyles.css";

export const Card = ({ id, title, description, isMapped }) => {
  const dispatch = useDispatch();
  const [isCompleting, setIsCompleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleComplete = () => {
    setIsCompleting(true);
    setTimeout(() => {
      dispatch(completeTodo({ id, title, description }));
      setIsCompleting(false);

      toast.success("Todo completata!", {
        className: "custom-toast",
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
    }, 100);
  };

  const handleDeleted = () => {
    setIsDeleted(true);
    setTimeout(() => {
      dispatch(deleteTodo({ id, title, description }));
      setIsDeleted(false);

      toast.error("Todo eliminata!", {
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
    }, 100);
  };

  return (
    <div
      className={`flex flex-col rounded-md bg-zinc-800 py-3 px-5 ${
        isCompleting
          ? "border-2 border-green-500"
          : isDeleted
          ? "border-2 border-red-500"
          : ""
      }`}
    >
      <div className="flex py-2 w-full flex-col md:flex-row items-center">
        <h3 className="font-bold text-white capitalize pr-6 whitespace-nowrap break-words text-center md:text-left">
          {title} :
        </h3>
        <div className="flex flex-col items-center w-full md:max-w-full">
          <p className="text-gray-500 capitalize whitespace-pre-wrap md:pr-6 break-words text-center">
            {description}
          </p>
        </div>
        <div className="flex gap-2 mx-auto">
          {isMapped && (
            <div className="flex ml-auto">
              <button onClick={handleComplete}>✅</button>
            </div>
          )}
          <button onClick={handleDeleted}>❌</button>
        </div>
      </div>
    </div>
  );
};
