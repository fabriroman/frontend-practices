export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string };

export type TodoState = {
  todos: Todo[];
};
