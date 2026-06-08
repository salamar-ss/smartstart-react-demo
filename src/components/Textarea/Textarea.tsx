import type { FormFieldEvent } from "../../types/form.types";

type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: FormFieldEvent
  ) => void;
};

function Textarea({
  label,
  name,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="textarea-field">

      <label className="textarea-field__label">
        {label}
      </label>

      <textarea
        className="textarea-field__textarea"
        name={name}
        value={value}
        onChange={onChange}
        rows={6}
      />

    </div>
  );
}

export default Textarea;