import { useReducer } from "react";

enum Action {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  FILTER_TODOS = "FILTER_TODOS",
  CLEAR_COMPLETED = "CLEAR_COMPLETED",
}

type TodoAction = {
  type: Action;
  payload?: string;
};

const ADD_TODO = Action.ADD_TODO;
const TOGGLE_TODO = Action.TOGGLE_TODO;
const FILTER_TODOS = Action.FILTER_TODOS;
const CLEAR_COMPLETED = Action.CLEAR_COMPLETED;

type TodoType = {
  id: string;
  label?: string;
  completed: boolean;
};

type TodoState = {
  todos: TodoType[];
  filter?: string;
};

const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toLocaleString(),
            label: action.payload,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case FILTER_TODOS:
      return { ...state, filter: action.payload };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};

const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

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

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    filterTodos,
    clearCompleted,
  };
};

export default useTodo;
