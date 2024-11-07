import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../../../hooks/useNewCVContext";

interface DateFieldProps {
  fieldName: string;
}

export default function DateOfBirth({ fieldName }: DateFieldProps) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={formsData[fieldName] || ""}
      render={({ field }) => (
        <div className="input-group">
          <span className="input-group-text">Date of Birth</span>
          <input {...field} type="date" className="form-control" />
        </div>
      )}
    />
  );
}
