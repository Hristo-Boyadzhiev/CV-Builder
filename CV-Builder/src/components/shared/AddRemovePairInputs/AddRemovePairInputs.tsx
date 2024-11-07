// import React from "react";
// import styles from "../../shared/Button/Button.module.css";
// import InputField from "../InputField/InputField";

// interface AddRemovePairInputsProps {
//   firstInputFieldName: string;
//   secondInputFieldName: string;
//   placeholderHeader: string;
//   placeholderList: string;
// }

// export default function AddRemovePairInputs({
//   firstInputFieldName,
//   secondInputFieldName,
//   placeholderHeader,
//   placeholderList,
// }: AddRemovePairInputsProps) {
//   const [fields, setFields] = React.useState([{ id: 1, header: "", list: "" }]);

//   function addPairInputs() {
//     setFields((prevFields) => [
//       ...prevFields,
//       { id: prevFields.length + 1, header: "", list: "" },
//     ]);
//   }

//   function removePairInputs() {
//     setFields((prevFields) =>
//       prevFields.length > 1 ? prevFields.slice(0, -1) : prevFields
//     );
//   }

//   return (
//     <>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <InputField
//             // fieldName={`add-remove-pair-inputs-header-${field.id}`}
//             fieldName={`${firstInputFieldName}-${field.id}`}
//             placeholder={placeholderHeader}
//           />
//           <InputField
//             // fieldName={`add-remove-pair-inputs-list-${field.id}`}
//             fieldName={`${secondInputFieldName}-${field.id}`}
//             placeholder={placeholderList}
//           />
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addPairInputs}
//         className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
//       >
//         Add
//       </button>

//       <button
//         type="button"
//         onClick={removePairInputs}
//         className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
//         style={{ marginLeft: "10px" }}
//       >
//         Remove
//       </button>
//     </>
//   );
// }
