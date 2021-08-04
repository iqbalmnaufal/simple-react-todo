import { useState } from "react";

const InputTodo = (props) => {
  const [getInputTodo, setInputTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };
    props.onCreateTodo(newTodo);
    setInputTodo("");
  };

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <form className="mb-2 px-8 flex" onSubmit={handleSubmit}>
      <input onChange={handleInputTodo} value={getInputTodo} className="appearance-none border border-blue-400 rounded py-2 px-3 mr-4 w-full text-grey-600 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Add Todo" />
      <button type="submit" className="shadow-xl border-2 border-blue-400 border-opacity-75 py-2 px-4 hover:bg-blue-500 hover:text-white">
        Add
      </button>
    </form>
  );
};

export default InputTodo;
