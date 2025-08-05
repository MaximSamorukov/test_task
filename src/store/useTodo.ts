import { createStore, useStore, type StoreApi } from "zustand";
import {
  Action,
  type TodoAction,
  type TodoState,
  type TodoStateAction,
} from "./types";
import { useCallback, useMemo } from "react";

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

export type TodoStore = TodoState & TodoStateAction;
export type TodoStoreApi = StoreApi<TodoStore>;

export const todoStoreCreator = () =>
  createStore<TodoStore>((set) => ({
    ...initialState,
    dispatch: (args: TodoAction) =>
      set((state: TodoState) => todoReducer(state, args)),
  }));

export const useTodo = (store: TodoStoreApi) => {
  const dispatch = useStore(store, (s) => s.dispatch);
  const todos = useStore(store, (s) => s.todos);
  const filter = useStore(store, (s) => s.filter);

  const addTodo = useCallback((label: string) => {
    if (label.trim()) {
      dispatch({ type: ADD_TODO, payload: label });
    }
  }, []);

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  }, []);

  const filterTodos = useCallback((filter: string) => {
    dispatch({ type: FILTER_TODOS, payload: filter });
  }, []);

  const clearCompleted = useCallback(() => {
    dispatch({ type: CLEAR_COMPLETED });
  }, []);
  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      }),
    [todos, filter]
  );
  const activeTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

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
