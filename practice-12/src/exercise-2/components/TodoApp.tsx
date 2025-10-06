import { TodoForm } from "./TodoForm.tsx";
import { TodoList } from "./TodoList.tsx";
import { TodoProvider } from "../contexts/TodoProvider.tsx";
import "../styles/TodoApp.css";

export const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <h1 className="todo-app__title">Lista de Tareas con useReducer</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
