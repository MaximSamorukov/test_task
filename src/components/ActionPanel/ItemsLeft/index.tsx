import { useTodoContext } from "@/store/todoContext";
import s from "./style.module.scss";

export const ItemsLeft = () => {
  const { activeTodos: todos } = useTodoContext();
  const count = todos.length;
  const label = count ? `${count} items left` : "no items";
  return (
    <div className={s.container}>
      <div className={s.label}>{label}</div>
    </div>
  );
};
