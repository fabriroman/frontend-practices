import type { Todo } from "../types/Todo";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/TodoItem.css";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, completed } = todo;
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className={`todo-item ${completed ? "todo-item--completed" : ""}`}>
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span className="todo-item__text">{text}</span>
      <button
        className="todo-item__delete-button"
        onClick={handleDelete}
        type="button"
      >
        Eliminar
      </button>
    </div>
  );
};
