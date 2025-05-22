import Check from "@/assets/check.svg?react";
import cn from "classnames";
import s from "./style.module.scss";

export const Completed = ({ completed }: { completed: boolean }) => (
  <div className={s.container}>
    <div className={cn(s.sign, { [s.signCompleted]: completed })}>
      <Check />
    </div>
  </div>
);
