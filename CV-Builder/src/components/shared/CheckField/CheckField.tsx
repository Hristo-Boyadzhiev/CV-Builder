import { Controller, useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import getFieldNameCamelCase from "../../../utils/getFieldNameCamelCase";

interface CheckFieldProps {
  fieldName: string;
}

export default function CheckField({ fieldName }: CheckFieldProps) {
  const { control } = useFormContext();
  const { formsData } = useNewCVContext();
  const fieldNameCamelCase = getFieldNameCamelCase(fieldName);
  // const fieldNameLowerCase = fieldName.toLowerCase();
  // const getFieldNameCamelCase = fieldName
  //   .split(" ")
  //   .map((word, index) => {
  //     if (index === 0) {
  //       return word.toLowerCase();
  //     }
  //     return word[0].toUpperCase() + word.slice(1).toLowerCase();
  //   })
  //   .join(""); // обединява обратно в низ
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
          />
          <label className="form-check-label" htmlFor={fieldNameCamelCase}>
            {fieldName}
          </label>
        </div>
      )}
    />
  );
}

// import { Controller, useFormContext } from "react-hook-form";
// import { useNewCVContext } from "../../../hooks/useNewCVContext";

// interface CheckFieldProps {
//   fieldName: string;
// }

// export default function CheckField({ fieldName }: CheckFieldProps) {
//   const { control } = useFormContext();
//   const { formsData } = useNewCVContext();
//   const fieldNameLowerCase = fieldName.toLowerCase();
//   return (
//     <Controller
//       name={fieldNameLowerCase}
//       defaultValue={formsData[fieldNameLowerCase] || false}
//       control={control}
//       render={({ field }) => (
//         <div className="form-check form-switch">
//           <input
//             {...field}
//             type="checkbox"
//             role="switch"
//             className="form-check-input"
//             checked={field.value}
//             id={fieldNameLowerCase}
//           />
//           <label className="form-check-label" htmlFor={fieldNameLowerCase}>
//             {fieldName}
//           </label>
//         </div>
//       )}
//     />
//   );
// }
