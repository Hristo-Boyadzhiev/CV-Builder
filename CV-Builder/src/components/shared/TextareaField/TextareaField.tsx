import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface TextareaField {
  fieldName: string;
  placeholder: string;
}

export default function TextareaField({
  fieldName,
  placeholder,
}: TextareaField) {
  const { control } = useFormContext();
  const { formsData, setFormsData } = useNewCVContext(); // За актуализиране на контекста

  return (
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
              field.onChange(e); // Обработваме промените чрез react-hook-form
              setFormsData((prevData) => ({
                ...prevData,
                [fieldName]: e.target.value, // Обновяваме контекста
              }));
            }}
          />
        </div>
      )}
    />
  );
}

// import { Controller, useFormContext } from "react-hook-form";
// import { useNewCVContext } from "../../../hooks/useNewCVContext";

// interface TextareaField {
//   fieldName: string;
//   placeholder: string;
// }

// export default function TextareaField({
//   fieldName,
//   placeholder,
// }: TextareaField) {
//   const { control } = useFormContext();
//   const { formsData } = useNewCVContext();

//   return (
//     <Controller
//       name={fieldName}
//       control={control}
//       defaultValue={formsData[fieldName] || ""}
//       render={({ field }) => (
//         <div className="input-group">
//           <textarea
//             {...field}
//             className="form-control"
//             aria-label="With textarea"
//             placeholder={placeholder}
//           />
//         </div>
//       )}
//     />
//   );
// }
