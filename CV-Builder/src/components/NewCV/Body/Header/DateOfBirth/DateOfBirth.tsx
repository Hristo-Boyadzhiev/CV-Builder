import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../../../hooks/useNewCVContext";
import styles from "../../../../shared/css/fieldContainer.module.css";

interface DateFieldProps {
  fieldName: string;
}

export default function DateOfBirth({ fieldName }: DateFieldProps) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();

  return (
    <article className={styles["field-container"]}>
      <h6>Date of birth</h6>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={formsData[fieldName] || ""}
        render={({ field }) => (
          <div className="input-group">
            <input
              {...field}
              type="date"
              className="form-control"
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          </div>
        )}
      />
    </article>
  );
}
