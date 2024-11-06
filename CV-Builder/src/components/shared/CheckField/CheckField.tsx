import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface CheckFieldProps {
  fieldName: string;
}

export default function CheckField({ fieldName }: CheckFieldProps) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();
  const fieldNameLowerCase = fieldName.toLowerCase();
  return (
    <Controller
      name={fieldNameLowerCase}
      defaultValue={formsData[fieldNameLowerCase] || undefined}
      control={control}
      render={({ field }) => (
        <div className="form-check form-switch">
          <input
            {...field}
            type="checkbox"
            role="switch"
            className="form-check-input"
            checked={field.value}
            id={fieldNameLowerCase}
          />
          <label className="form-check-label" htmlFor={fieldNameLowerCase}>
            {fieldName}
          </label>
        </div>
      )}
    />
  );
}
