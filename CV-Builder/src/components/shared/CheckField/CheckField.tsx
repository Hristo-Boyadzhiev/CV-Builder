import { Controller, useFormContext } from "react-hook-form";

interface CheckFieldProps {
  fieldName: string;
}

export default function CheckField({ fieldName }: CheckFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <div className="form-check form-switch">
          <input
            {...field}
            type="checkbox"
            role="switch"
            className="form-check-input"
            id={fieldName}
          />
          <label className="form-check-label" htmlFor={fieldName}>
            {fieldName}
          </label>
        </div>
      )}
    />
  );
}
