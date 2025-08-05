import React from "react";
import s from "./style.module.scss";
import type { TodoType } from "@/store/types";

export const ItemsLeft = React.memo(
  ({ activeTodos: todos }: { activeTodos: TodoType[] }) => {
    const count = todos.length;
    const label = count ? `${count} items left` : "no items";
    return (
      <div className={s.container}>
        <div className={s.label}>{label}</div>
      </div>
    );
  }
);
