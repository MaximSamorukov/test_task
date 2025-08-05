import React from "react";
import { Completed } from "../Completed";
import cn from "classnames";
import s from "./style.module.scss";

type ItemProps = {
  id: string;
  jobTitle: string;
  completed: boolean;
  toggleTodo: (a: string) => void;
};

export const Item: React.FC<ItemProps> = React.memo(
  ({ id, jobTitle, completed, toggleTodo }) => (
    <div data-testid={jobTitle} className={s.container}>
      <Completed toggleTodo={toggleTodo} id={id} completed={completed} />
      <div className={s.jobTitleContainer}>
        <div
          className={cn(s.jobTitleLabel, { [s.jobTitleCompleted]: completed })}
        >
          {jobTitle}
        </div>
      </div>
    </div>
  )
);
