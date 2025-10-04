import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/TodoForm.css";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form__input-group">
        <input
          className="todo-form__input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe una nueva tarea..."
        />
        <button
          className="todo-form__button"
          type="submit"
          disabled={!inputValue.trim()}
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
