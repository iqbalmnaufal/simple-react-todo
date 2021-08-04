import Header from "./components/header/Header";
import InputTodo from "./components/input/Input";
import ShowTodo from "./components/show-todo/ShowTodo";
import { useState } from "react";

function App() {
  const [getTodo, setTodo] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Vuejs" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodo(getTodo.concat(todo));
  };

  return (
    <div className="App">
      <div className="bg-green-200 rounded min-h-screen flex items-center">
        <div className="w-3/4 bg-white mx-auto">
          <Header />
          <InputTodo onCreateTodo={eventCreateTodo} />
          <ShowTodo dataTodos={getTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
