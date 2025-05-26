import { useTodoContext } from "@/store/todoContext";
import { Item } from "../Item";
import s from "./style.module.scss";

export const List = () => {
  const { todos } = useTodoContext();
  return (
    <div data-testid="list" className={s.container}>
      {todos.map((i) => (
        <Item key={i.id} id={i.id} jobTitle={i.label} completed={i.completed} />
      ))}
    </div>
  );
};
