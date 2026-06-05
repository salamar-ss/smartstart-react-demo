type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="input-field">

      <label className="input-field__label">
        {label}
      </label>

      <input
        className="input-field__input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default Input;