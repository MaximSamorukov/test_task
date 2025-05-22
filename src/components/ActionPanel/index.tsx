import { ClearCompleted } from "./ClearCompleted";
import { Filter } from "./Filter";
import { ItemsLeft } from "./ItemsLeft";
import s from "./style.module.scss";

export const ActionPanel = () => {
  return (
    <div className={s.container}>
      <ItemsLeft />
      <Filter />
      <ClearCompleted />
    </div>
  );
};
