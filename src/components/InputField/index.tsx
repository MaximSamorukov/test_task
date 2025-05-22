import Chevron from "@/assets/chevron.svg?react";
import s from "./style.module.scss";

type InputFieldProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={s.container}>
      <button className={s.button}>
        <Chevron />
      </button>
      <input
        type="text"
        className={s.bigInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
