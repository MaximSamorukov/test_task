import { useTodoContext } from "@/store/context";
import cn from "classnames";
import s from "./style.module.scss";

export const Completed = () => {
  const { filterTodos, filter } = useTodoContext();

  const handleClick = () => {
    filterTodos("completed");
  };
  return (
    <div className={cn(s.container, { [s.activated]: filter === "completed" })}>
      <button onClick={handleClick} className={s.label}>
        Completed
      </button>
    </div>
  );
};
