import { Controller, useFormContext } from "react-hook-form";

interface TextareaField {
  fieldName: string;
}

export default function TextareaField({ fieldName }: TextareaField) {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="input-group">
          <textarea
            {...field}
            className="form-control"
            aria-label="With textarea"
            placeholder={`Enter your summary`}
          />
        </div>
      )}
    />
  );
}
