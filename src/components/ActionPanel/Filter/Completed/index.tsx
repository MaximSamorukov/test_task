import s from "./style.module.scss";

export const Completed = () => {
  return (
    <div className={s.container}>
      <button className={s.label}>Completed</button>
    </div>
  );
};
