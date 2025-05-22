import React, { createContext, useContext, type ReactNode } from "react";
import useTodo from "./useTodo";
import type { TodoContextType } from "./types";

const TodoContext = createContext<TodoContextType>({
  todos: [],
  filter: undefined,
  addTodo: () => {},
  toggleTodo: () => {},
  filterTodos: () => {},
  clearCompleted: () => {},
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const todoMethods = useTodo();
  return (
    <TodoContext.Provider value={todoMethods}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context.addTodo.name) throw new Error("Отсутствует TodoProvider");
  return context;
};
