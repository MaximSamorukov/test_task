import { create } from "zustand";
import { Action, type TodoAction, type TodoState } from "./types";

const ADD_TODO = Action.ADD_TODO;
const TOGGLE_TODO = Action.TOGGLE_TODO;
const FILTER_TODOS = Action.FILTER_TODOS;
const CLEAR_COMPLETED = Action.CLEAR_COMPLETED;

export const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          {
            id: Date.now().toLocaleString(),
            label: action.payload!,
            completed: false,
          },
          ...state.todos,
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case FILTER_TODOS:
      return { filter: action.payload };
    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};

const useTodoStore = create<
  TodoState & { dispatch: (args: TodoAction) => void }
>()((set) => ({
  ...initialState,
  dispatch: (args: TodoAction) =>
    set((state: TodoState) => todoReducer(state, args)),
}));

const useTodo = () => {
  const dispatch = useTodoStore((s) => s.dispatch);
  const todos = useTodoStore((s) => s.todos);
  const filter = useTodoStore((s) => s.filter);

  const addTodo = (label: string) => {
    if (label.trim()) {
      dispatch({ type: ADD_TODO, payload: label });
    }
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  const filterTodos = (filter: string) => {
    dispatch({ type: FILTER_TODOS, payload: filter });
  };

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  const activeTodos = todos.filter((todo) => !todo.completed);

  return {
    activeTodos,
    filter,
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    filterTodos,
    clearCompleted,
  };
};

export default useTodo;
