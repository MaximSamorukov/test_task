import { useTodoContext } from "@/store/context";
import s from "./style.module.scss";

export const ClearCompleted = () => {
  const { clearCompleted } = useTodoContext();

  const handleClear = () => clearCompleted();
  return (
    <div className={s.container}>
      <button onClick={handleClear} className={s.label}>
        Clear completed
      </button>
    </div>
  );
};
