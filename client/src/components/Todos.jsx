import React, { Fragment, useState, useEffect } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const DeleteTodo = async (id) => {
    try {
      await fetch(`/api/v1/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch ({ message }) {
      console.error(message);
    }
  };

  const getAllTodos = async () => {
    try {
      const response = await fetch("/api/v1/todos");
      const data = await response.json();
      setTodos(data);
    } catch ({ message }) {
      console.error(message);
    }
  };

  useEffect(() => {
    getAllTodos();
  });

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo onDelete={DeleteTodo} key={todo.id} {...todo} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Todos;
