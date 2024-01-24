import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todosSlice";
import { v4 as uuidv4 } from "uuid";

export const CardForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isDone: false,
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
    };

    setFormData({
      title: "",
      description: "",
      isDone: false,
    });
    dispatch(add(todo));
  };

  console.log(
    "name:",
    formData.title,
    "description:",
    formData.description,
    "checked",
    formData.isDone
  );
  return (
    <>
      <form
        className="flex flex-col gap-5 mt-10 w-72 border border-stone-200 rounded-lg p-5 bg-slate-700 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-white font-bold">Cosa devi fare oggi?</h2>

        <div className="flex flex-col  ">
          <label className="text-white">Title:</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="bg-slate-700 border-2 border-stone-200 text-white pl-1 w-full "
          ></input>
        </div>

        <div className="flex flex-col  ">
          <label className="text-white">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="bg-slate-700 border-2 border-stone-200 text-white pl-1 h-32"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-slate-700 border-2 border-stone-200 text-white pl-1 max-w-[150px] w-full rounded-lg py-1 hover:bg-slate-600"
            type="submit"
          >
            Invia
          </button>
        </div>
      </form>
    </>
  );
};
