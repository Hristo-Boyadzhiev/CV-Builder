import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import getFieldNameCamelCase from "../../../utils/getFieldNameCamelCase";

interface CheckFieldProps {
  fieldName: string;
}

export default function CheckField({ fieldName }: CheckFieldProps) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();
  const fieldNameCamelCase = getFieldNameCamelCase(fieldName);
  return (
    <Controller
      name={fieldNameCamelCase}
      defaultValue={formsData[fieldNameCamelCase] || false}
      control={control}
      render={({ field }) => (
        <div className="form-check form-switch">
          <input
            {...field}
            type="checkbox"
            role="switch"
            className="form-check-input"
            checked={field.value}
            id={fieldNameCamelCase}
          />
          <label className="form-check-label" htmlFor={fieldNameCamelCase}>
            {fieldName}
          </label>
        </div>
      )}
    />
  );
}
