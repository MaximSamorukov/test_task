import { filterButtons } from "../constants";
import { FilterButton } from "./FilterButton";
import s from "./style.module.scss";

export const Filter = () => {
  return (
    <div className={s.container}>
      {filterButtons.map((i) => (
        <FilterButton key={i} filterType={i} />
      ))}
    </div>
  );
};
