import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem.tsx";
import "../styles/TodoList.css";

export const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todos } = state;
  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <div className="todo-list__empty">
          <p className="todo-list__empty-text">No hay tareas pendientes</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list__header">
        <h3 className="todo-list__title">Lista de Tareas</h3>
      </div>
      <div className="todo-list__items">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
