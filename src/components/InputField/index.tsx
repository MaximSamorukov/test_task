import type React from "react";
import cn from "classnames";
import { useCallback, useMemo, useState } from "react";
import { useTodoContext } from "@/store/todoContext";
import s from "./style.module.scss";
import { useCollapeContext } from "@/store/collapseContext";
import { DeleteBtn } from "./DeleteBtn";
import { ToggleBtn } from "./ToggleBtn";

type InputFieldProps = {
  placeholder?: string;
};

export const InputField = ({ placeholder }: InputFieldProps) => {
  const { addTodo } = useTodoContext();
  const { toggleCollapse, isOpen } = useCollapeContext();

  const [label, setLabel] = useState<string>("");

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
  const showDeleteBtn = useMemo(() => !!label.length, [label]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };

  const clearInput = useCallback(() => setLabel(""), []);

  return (
    <div className={cn(s.container, { [s.containerClosed]: !isOpen })}>
      <ToggleBtn toggleCollapse={toggleCollapse} isOpen={isOpen} />
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className={s.bigInput}
        placeholder={placeholder}
        onChange={handleChange}
        value={label}
      />
      <DeleteBtn clearInput={clearInput} show={showDeleteBtn} />
    </div>
  );
};
