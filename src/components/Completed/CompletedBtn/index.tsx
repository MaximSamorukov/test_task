import React from "react";
import Check from "@/assets/check.svg?react";
import cn from "classnames";
import s from "../style.module.scss";

export const CompletedBtn = React.memo(
  ({
    completed,
    handleClick,
  }: {
    handleClick: () => void;
    completed: boolean;
  }) => {
    return (
      <button onClick={handleClick} className={s.container}>
        <div className={cn(s.sign, { [s.signCompleted]: completed })}>
          <Check />
        </div>
      </button>
    );
  }
);
