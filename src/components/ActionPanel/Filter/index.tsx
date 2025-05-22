import { Active } from "./Active";
import { All } from "./All";
import { Completed } from "./Completed";
import s from "./style.module.scss";

export const Filter = () => {
  return (
    <div className={s.container}>
      <All />
      <Active />
      <Completed />
    </div>
  );
};
