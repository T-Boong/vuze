interface ConsentCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const ConsentCheckbox = ({
  label,
  checked,
  onChange,
}: ConsentCheckboxProps) => (
  <label className="flex items-center text-sm text-gray-300">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2 accent-blue-500"
    />
    <span>{label}</span>
  </label>
);
