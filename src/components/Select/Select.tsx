import type { FormFieldEvent } from "../../types/form.types";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (
    event: FormFieldEvent
  ) => void;
};

function Select({
  label,
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div className="select-field">

      <label className="select-field__label">
        {label}
      </label>

      <select
        className="select-field__select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}

export default Select;