import { useTodoContext } from "@/store/todoContext";
import { Item } from "../Item";
import s from "./style.module.scss";
import React from "react";
import { useCollapeContext } from "@/store/collapseContext";

export const List = React.memo(() => {
  const { todos, toggleTodo } = useTodoContext();
  const { isOpen } = useCollapeContext();

  if (!isOpen) {
    return null;
  }
  return (
    <div data-testid="list" className={s.container}>
      {todos.map((i) => (
        <Item
          toggleTodo={toggleTodo}
          key={i.id}
          id={i.id}
          jobTitle={i.label}
          completed={i.completed}
        />
      ))}
    </div>
  );
});
