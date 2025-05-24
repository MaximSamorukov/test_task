import type React from "react";
import cn from "classnames";
import { useState } from "react";
import Chevron from "@/assets/chevron.svg?react";
import Close from "@/assets/close.svg?react";
import { useTodoContext } from "@/store/todoContext";
import s from "./style.module.scss";
import { useCollapeContext } from "@/store/collapseContext";

type InputFieldProps = {
  placeholder?: string;
};

export const InputField = ({ placeholder }: InputFieldProps) => {
  const { addTodo } = useTodoContext();
  const { toggleCollapse, isOpen } = useCollapeContext();

  const [label, setLabel] = useState<string>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      const value = (e.currentTarget.value || "").trim();
      if (value) {
        addTodo(value);
        setLabel("");
      }
      if (!isOpen && value) {
        toggleCollapse();
      }
      if (!value) {
        setLabel("");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };

  const clearInput = () => setLabel("");

  return (
    <div className={cn(s.container, { [s.containerClosed]: !isOpen })}>
      <button
        onClick={toggleCollapse}
        className={cn(s.button, { [s.buttonClosed]: !isOpen })}
      >
        <Chevron />
      </button>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className={s.bigInput}
        placeholder={placeholder}
        onChange={handleChange}
        value={label}
      />
      {label?.length ? (
        <button onClick={clearInput} className={s.buttonClear}>
          <Close />
        </button>
      ) : null}
    </div>
  );
};
