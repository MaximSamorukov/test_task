import { useTodoContext } from "@/store/context";
import s from "./style.module.scss";
import cn from "classnames";

export const All = () => {
  const { filterTodos, filter } = useTodoContext();

  const handleClick = () => {
    filterTodos("all");
  };
  return (
    <div className={cn(s.container, { [s.activated]: filter === "all" })}>
      <button onClick={handleClick} className={s.label}>
        All
      </button>
    </div>
  );
};
