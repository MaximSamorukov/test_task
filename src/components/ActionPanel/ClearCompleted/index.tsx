import { useTodoContext } from "@/store/todoContext";
import s from "./style.module.scss";

export const ClearCompleted = () => {
  const { clearCompleted } = useTodoContext();

  const handleClear = () => clearCompleted();
  return (
    <div data-testid="clearCompleted" className={s.container}>
      <button onClick={handleClear} className={s.label}>
        Clear completed
      </button>
    </div>
  );
};
