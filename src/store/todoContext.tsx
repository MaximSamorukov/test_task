import React, {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { todoStoreCreator, useTodo, type TodoStoreApi } from "./useTodo";

const TodoContext = createContext<TodoStoreApi | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const todoMethodsRef = useRef<TodoStoreApi>(undefined);
  if (!todoMethodsRef.current) {
    todoMethodsRef.current = todoStoreCreator();
  }
  return (
    <TodoContext.Provider value={todoMethodsRef.current}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context?.getState()) throw new Error("Отсутствует TodoProvider");

  return useTodo(context);
};
