import type { Todo, TodoAction, TodoState } from "../types/Todo";

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...todos, newTodo],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
};
