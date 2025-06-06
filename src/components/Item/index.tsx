import { Completed } from "../Completed";
import cn from "classnames";
import s from "./style.module.scss";

type ItemProps = {
  id: string;
  jobTitle: string;
  completed: boolean;
};

export const Item: React.FC<ItemProps> = ({ id, jobTitle, completed }) => (
  <div data-testid={jobTitle} className={s.container}>
    <Completed id={id} completed={completed} />
    <div className={s.jobTitleContainer}>
      <div
        className={cn(s.jobTitleLabel, { [s.jobTitleCompleted]: completed })}
      >
        {jobTitle}
      </div>
    </div>
  </div>
);
