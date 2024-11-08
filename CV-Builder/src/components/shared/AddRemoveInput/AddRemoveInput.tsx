import React from "react";
import InputField from "../InputField/InputField";
import buttonStyles from "../css/button.module.css";
import fieldStyles from "../css/fieldContainer.module.css";
import { useFormContext } from "react-hook-form";

interface AddRemoveInputProps {
  header: string;
  fieldName: string;
  placeholder: string;
  resetFields?: boolean;
}

export default function AddRemoveInput({
  header,
  fieldName,
  placeholder,
  resetFields,
}: AddRemoveInputProps) {
  const [field, setField] = React.useState([{ id: 1, header: "", list: "" }]);
  const { setValue } = useFormContext();

  React.useEffect(() => {
    if (resetFields) {
      setField([{ id: 1, header: "", list: "" }]);
      setValue(`${fieldName}-1`, "");
    }
  }, [resetFields, fieldName]);

  React.useEffect(() => {
    if (field.length > 1) {
      const lastFieldName = `${fieldName}-${field.length}`;
      setValue(lastFieldName, "");
    }
  }, [field, fieldName]);

  function addInput() {
    setField((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, header: "", list: "" },
    ]);
  }

  function removeInput() {
    setField((prevFields) => {
      if (prevFields.length > 1) {
        return prevFields.slice(0, -1);
      }
      return prevFields;
    });
  }

  return (
    <article className={fieldStyles["field-container"]}>
      <h6>{header}</h6>
      {field.map((field) => (
        <div key={field.id}>
          <InputField
            fieldName={`${fieldName}-${field.id}`}
            placeholder={placeholder}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addInput}
        className={`btn btn-outline-secondary ${buttonStyles["customize-button"]} ${buttonStyles["btn-black"]}`}
      >
        Add
      </button>

      <button
        type="button"
        onClick={removeInput}
        className={`btn btn-outline-secondary ${buttonStyles["customize-button"]} ${buttonStyles["btn-black"]}`}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </article>
  );
}
