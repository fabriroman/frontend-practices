import { createContext } from "react";
import type { TodoState } from "../types/Todo";
import { initialState } from "../reducers/todoReducer";

export type TodoContextType = {
  state: TodoState;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  state: initialState,
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});
