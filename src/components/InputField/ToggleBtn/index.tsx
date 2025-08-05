import React from "react";
import cn from "classnames";
import Chevron from "@/assets/chevron.svg?react";
import s from "../style.module.scss";

export const ToggleBtn = React.memo(
  ({
    toggleCollapse,
    isOpen,
  }: {
    toggleCollapse: () => void;
    isOpen: boolean;
  }) => {
    return (
      <button
        data-testid="open-btn"
        onClick={toggleCollapse}
        className={cn(s.button, { [s.buttonClosed]: !isOpen })}
      >
        <Chevron />
      </button>
    );
  }
);
