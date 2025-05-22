import { useTodoContext } from "@/store/context";
import cn from "classnames";
import s from "./style.module.scss";

export const Active = () => {
  const { filterTodos, filter } = useTodoContext();

  const handleClick = () => {
    filterTodos("active");
  };
  return (
    <div className={cn(s.container, { [s.activated]: filter === "active" })}>
      <button onClick={handleClick} className={s.label}>
        Active
      </button>
    </div>
  );
};
