import React from "react";
import Close from "@/assets/close.svg?react";
import s from "../style.module.scss";

export const DeleteBtn = React.memo(
  ({ clearInput, show }: { clearInput: () => void; show: boolean }) => {
    if (!show) {
      return null;
    }
    return (
      <button
        data-testid="delete-btn"
        onClick={clearInput}
        className={s.buttonClear}
      >
        <Close />
      </button>
    );
  }
);
