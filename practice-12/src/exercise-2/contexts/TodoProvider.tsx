import { useReducer, type ReactNode } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import type { TodoAction } from "../types/Todo";
import { TodoContext, type TodoContextType } from "./TodoContext";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text: string) => {
    const action: TodoAction = {
      type: "ADD_TODO",
      payload: text,
    };
    dispatch(action);
  };

  const toggleTodo = (id: string) => {
    const action: TodoAction = {
      type: "TOGGLE_TODO",
      payload: id,
    };
    dispatch(action);
  };

  const deleteTodo = (id: string) => {
    const action: TodoAction = {
      type: "DELETE_TODO",
      payload: id,
    };
    dispatch(action);
  };

  const value: TodoContextType = {
    state,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
