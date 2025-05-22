import s from "./style.module.scss";

export const ClearCompleted = () => {
  return (
    <div className={s.container}>
      <button className={s.label}>Clear completed</button>
    </div>
  );
};
