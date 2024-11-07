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
  }, [headerChecked]);

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
