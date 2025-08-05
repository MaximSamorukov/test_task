import React, { useCallback } from "react";
import { CompletedBtn } from "./CompletedBtn";

export const Completed = React.memo(
  ({
    completed,
    id,
    toggleTodo,
  }: {
    toggleTodo: (a: string) => void;
    completed: boolean;
    id: string;
  }) => {
    const handleClick = useCallback(() => {
      toggleTodo(id);
    }, [id]);
    return <CompletedBtn handleClick={handleClick} completed={completed} />;
  }
);
