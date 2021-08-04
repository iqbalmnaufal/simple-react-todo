const ShowTodo = (props) => {
  return (
    <ul className="px-8 py-2">
      {props.dataTodos.map((todo) => {
        return (
          <li key={todo.id} className="py-2 flex justify-between">
            <p>{todo.title}</p>
            <button className="py-1 px-1 rounded appearance-none border border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Remove</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowTodo;
