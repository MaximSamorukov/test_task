export enum Action {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  FILTER_TODOS = "FILTER_TODOS",
  CLEAR_COMPLETED = "CLEAR_COMPLETED",
}

export type TodoAction = {
  type: Action;
  payload?: string;
};

export type TodoType = {
  id: string;
  label: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoType[];
  filter?: string;
};

export type TodoStateAction = {
  dispatch: (arg: TodoAction) => void;
};

export interface TodoContextType {
  filter?: string;
  todos: TodoType[];
  activeTodos: TodoType[];
  addTodo: (label: string) => void;
  toggleTodo: (id: string) => void;
  filterTodos: (filter: string) => void;
  clearCompleted: () => void;
}

export interface CollapseContextType {
  isOpen: boolean;
  toggleCollapse: () => void;
}
