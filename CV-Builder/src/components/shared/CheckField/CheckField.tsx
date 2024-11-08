import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import getFieldNameCamelCase from "../../../utils/getFieldNameCamelCase";
import React from "react";

interface CheckFieldProps {
  fieldName: string;
}

export default function CheckField({ fieldName }: CheckFieldProps) {
  const { control, watch, setValue } = useFormContext();
  const { formsData } = useNewCVContext();
  const fieldNameCamelCase = getFieldNameCamelCase(fieldName);

  const headerChecked = watch("header");
  const imageChecked = watch("image");

  //add all from FromContent component checkField
  // Когато чекнем и отчекнем някой да може да се занулят съдържащите се в чека полета
  // Например ако чек и отчек Header, Но нещо в полетата в Header, например summary съм попълнил нещо
  // Да се занули

  React.useEffect(() => {
    if (!headerChecked) {
      setValue("summary", "");
      setValue("dateOfBirth", "");
      setValue("mainContact", "");
      setValue("socialContact", "");
      setValue("summaryTextarea", "");
      setValue("dateOfBirthInput", "");
      setValue("phoneNumber", "");
      setValue("eMail", "");
      setValue("country", "");
      setValue("city", "");
      setValue("linkedIn", "");
      setValue("website", "");
      setValue("gitHub", "");
    }

    if (!imageChecked) {
      setValue("upload-image", "");
    }
  }, [headerChecked, imageChecked]); //да не забравям да ги добавям

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
            onChange={(e) => {
              field.onChange(e);
            }}
          />
          <label className="form-check-label" htmlFor={fieldNameCamelCase}>
            {fieldName}
          </label>
        </div>
      )}
    />
  );
}
