import s from "./style.module.scss";

export const Active = () => {
  return (
    <div className={s.container}>
      <button className={s.label}>Active</button>
    </div>
  );
};
