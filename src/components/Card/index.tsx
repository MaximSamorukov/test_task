import { useCollapeContext } from "@/store/collapseContext";
import cn from "classnames";
import { ActionPanel } from "../ActionPanel";
import { InputField } from "../InputField";
import { List } from "../List";
import s from "./style.module.scss";

export const Card = () => {
  const { isOpen } = useCollapeContext();

  return (
    <div className={cn(s.container, { [s.containerOpen]: isOpen })}>
      <InputField placeholder="What needs to be done?" />
      <List />
      <ActionPanel />
    </div>
  );
};
