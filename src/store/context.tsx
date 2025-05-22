import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import useTodo from "./useTodo";
import type { CollapseContextType, TodoContextType } from "./types";

const TodoContext = createContext<TodoContextType>({
  activeTodos: [],
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

const CollapseContext = createContext<CollapseContextType>({
  isOpen: false,
  toggleCollapse: () => {},
});

export const CollapseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CollapseContext.Provider value={{ isOpen, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapeContext = () => {
  const context = useContext(CollapseContext);
  if (!context.toggleCollapse) throw new Error("Отсутствует CollapseProvider");
  return context;
};
