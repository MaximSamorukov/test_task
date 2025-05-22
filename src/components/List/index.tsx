import { Item } from "../Item";
import s from "./style.module.scss";

export const List = () => {
  return (
    <div className={s.container}>
      {Array(8)
        .fill({})
        .map((_i, index) => (
          <Item
            key={index}
            id={index.toString()}
            jobTitle={`jobTitle_${index}`}
            completed={index % 2 === 0}
          />
        ))}
    </div>
  );
};
