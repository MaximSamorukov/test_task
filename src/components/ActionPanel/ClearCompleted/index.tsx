import React from "react";
import s from "./style.module.scss";

export const ClearCompleted = React.memo(
  ({ clearCompleted }: { clearCompleted: () => void }) => {
    const handleClear = () => clearCompleted();
    return (
      <div data-testid="clearCompleted" className={s.container}>
        <button onClick={handleClear} className={s.label}>
          Clear completed
        </button>
      </div>
    );
  }
);
