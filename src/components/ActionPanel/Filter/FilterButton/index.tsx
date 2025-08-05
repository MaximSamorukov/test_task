import React from "react";
import cn from "classnames";
import s from "./style.module.scss";
import { filterButtonLabels } from "../../constants";

export const FilterButton = React.memo(
  ({
    filterType,
    filterTodos,
    isCurrentFilter,
  }: {
    filterType: string;
    isCurrentFilter: boolean;
    filterTodos: (a: string) => void;
  }) => {
    const handleClick = () => {
      filterTodos(filterType);
    };
    return (
      <div className={cn(s.container, { [s.activated]: isCurrentFilter })}>
        <button
          data-testid={filterType}
          onClick={handleClick}
          className={s.label}
        >
          {filterButtonLabels[filterType as keyof typeof filterButtonLabels]}
        </button>
      </div>
    );
  }
);
