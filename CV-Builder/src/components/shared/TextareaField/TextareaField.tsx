import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import styles from "../css/fieldContainer.module.css";

interface TextareaField {
  header?: string;
  fieldName: string;
  placeholder: string;
}

export default function TextareaField({
  header,
  fieldName,
  placeholder,
}: TextareaField) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();

  return (
    <article className={styles["field-container"]}>
      <h6>{header}</h6>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={formsData[fieldName] || ""}
        render={({ field }) => (
          <div className="input-group">
            <textarea
              {...field}
              className="form-control"
              aria-label="With textarea"
              placeholder={placeholder}
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
