import type React from "react";
import { useState } from "react";
import Chevron from "@/assets/chevron.svg?react";
import Close from "@/assets/close.svg?react";
import { useTodoContext } from "@/store/context";
import s from "./style.module.scss";

type InputFieldProps = {
  placeholder?: string;
};

export const InputField = ({ placeholder }: InputFieldProps) => {
  const { addTodo } = useTodoContext();
  const [label, setLabel] = useState<string>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      const value = (e.currentTarget.value || "").trim();
      if (value) {
        addTodo(value);
        setLabel("");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };

  const clearInput = () => setLabel("");

  return (
    <div className={s.container}>
      <button className={s.button}>
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
      <button onClick={clearInput} className={s.buttonClear}>
        <Close />
      </button>
    </div>
  );
};
