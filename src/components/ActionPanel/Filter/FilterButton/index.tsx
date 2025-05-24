import { useTodoContext } from "@/store/todoContext";
import cn from "classnames";
import s from "./style.module.scss";
import { filterButtonLabels } from "../../constants";

export const FilterButton = ({ filterType }: { filterType: string }) => {
  const { filterTodos, filter } = useTodoContext();

  const handleClick = () => {
    filterTodos(filterType);
  };
  return (
    <div className={cn(s.container, { [s.activated]: filter === filterType })}>
      <button onClick={handleClick} className={s.label}>
        {filterButtonLabels[filterType as keyof typeof filterButtonLabels]}
      </button>
    </div>
  );
};
