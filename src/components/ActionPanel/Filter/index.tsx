import React from "react";
import { filterButtons } from "../constants";
import { FilterButton } from "./FilterButton";
import s from "./style.module.scss";

export const Filter = React.memo(
  ({
    filterTodos,
    filter,
  }: {
    filterTodos: (a: string) => void;
    filter?: string;
  }) => {
    return (
      <div className={s.container}>
        {filterButtons.map((i) => (
          <FilterButton
            key={i}
            filterType={i}
            filterTodos={filterTodos}
            isCurrentFilter={filter === i}
          />
        ))}
      </div>
    );
  }
);
