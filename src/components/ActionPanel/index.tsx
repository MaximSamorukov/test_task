import { useCollapeContext } from "@/store/collapseContext";
import { ClearCompleted } from "./ClearCompleted";
import { Filter } from "./Filter";
import { ItemsLeft } from "./ItemsLeft";
import s from "./style.module.scss";
import { useTodoContext } from "@/store/todoContext";

export const ActionPanel = () => {
  const { isOpen } = useCollapeContext();
  const { clearCompleted, filterTodos, filter, activeTodos } = useTodoContext();
  if (!isOpen) {
    return null;
  }
  return (
    <div className={s.container}>
      <ItemsLeft activeTodos={activeTodos} />
      <Filter filterTodos={filterTodos} filter={filter} />
      <ClearCompleted clearCompleted={clearCompleted} />
    </div>
  );
};
