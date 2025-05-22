import Check from "@/assets/check.svg?react";
import cn from "classnames";
import s from "./style.module.scss";
import { useTodoContext } from "@/store/context";

export const Completed = ({
  completed,
  id,
}: {
  completed: boolean;
  id: string;
}) => {
  const { toggleTodo } = useTodoContext();

  const handleClick = () => {
    toggleTodo(id);
  };
  return (
    <button onClick={handleClick} className={s.container}>
      <div className={cn(s.sign, { [s.signCompleted]: completed })}>
        <Check />
      </div>
    </button>
  );
};
