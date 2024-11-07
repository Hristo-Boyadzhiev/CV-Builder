import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface InputField {
  fieldName: string;
  placeholder: string;
}

export default function InputField({ fieldName, placeholder }: InputField) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={formsData[fieldName] || ""}
      render={({ field }) => (
        <div className="input-group mb-3">
          <input
            {...field}
            type="text"
            className="form-control"
            placeholder={placeholder}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              field.onChange(e);
            }}
          />
        </div>
      )}
    />
  );
}
