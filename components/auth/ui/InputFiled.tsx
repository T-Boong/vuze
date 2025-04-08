import { HTMLInputTypeAttribute } from "react";
interface InputFiledProps {
  label: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputFiled = ({
  label,
  value,
  type,
  onChange,
  placeholder,
}: InputFiledProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        autoComplete="off"
        type={type}
        className="w-full p-2 rounded bg-zinc-800 text-white focus:outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputFiled;
