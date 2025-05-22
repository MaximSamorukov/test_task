import { ActionPanel } from "../ActionPanel";
import { InputField } from "../InputField";
import { List } from "../List";
import s from "./style.module.scss";

export const Card = () => {
  return (
    <div className={s.container}>
      <InputField placeholder="What needs to be done?" />
      <List />
      <ActionPanel />
    </div>
  );
};
