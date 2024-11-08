import React, { useEffect } from "react";
import buttonStyles from "../css/button.module.css";
import InputField from "../InputField/InputField";
import { useFormContext } from "react-hook-form";
import fieldStyles from "../css/fieldContainer.module.css";

interface AddRemovePairInputsProps {
  header: string;
  firstInputFieldName: string;
  secondInputFieldName: string;
  placeholderHeader: string;
  placeholderList: string;
  resetFields?: boolean;
}

export default function AddRemovePairInputs({
  header,
  firstInputFieldName,
  secondInputFieldName,
  placeholderHeader,
  placeholderList,
  resetFields,
}: AddRemovePairInputsProps) {
  const [fields, setFields] = React.useState([{ id: 1, header: "", list: "" }]);
  const { setValue } = useFormContext();

  // Reset fields when resetFields prop changes
  useEffect(() => {
    if (resetFields) {
      setFields([{ id: 1, header: "", list: "" }]); // Reset to a single empty pair
      setValue(`${firstInputFieldName}-1`, "");
      setValue(`${secondInputFieldName}-1`, "");
    }
  }, [resetFields, setValue, firstInputFieldName, secondInputFieldName]);

  function addPairInputs() {
    setFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, header: "", list: "" },
    ]);
  }

  function removePairInputs() {
    setFields((prevFields) => {
      if (prevFields.length > 1) {
        const lastFieldId = prevFields[prevFields.length - 1].id;
        // Delay resetting both fields to avoid issues during render
        setTimeout(() => {
          setValue(`${firstInputFieldName}-${lastFieldId}`, "");
          setValue(`${secondInputFieldName}-${lastFieldId}`, "");
        }, 0);
        return prevFields.slice(0, -1);
      }
      return prevFields;
    });
  }

  return (
    <article className={fieldStyles["field-container"]}>
      <h6>{header}</h6>
      {fields.map((field) => (
        <div key={field.id}>
          <InputField
            fieldName={`${firstInputFieldName}-${field.id}`}
            placeholder={placeholderHeader}
          />
          <InputField
            fieldName={`${secondInputFieldName}-${field.id}`}
            placeholder={placeholderList}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addPairInputs}
        className={`btn btn-outline-secondary ${buttonStyles["customize-button"]} ${buttonStyles["btn-black"]}`}
      >
        Add
      </button>

      <button
        type="button"
        onClick={removePairInputs}
        className={`btn btn-outline-secondary ${buttonStyles["customize-button"]} ${buttonStyles["btn-black"]}`}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </article>
  );
}
