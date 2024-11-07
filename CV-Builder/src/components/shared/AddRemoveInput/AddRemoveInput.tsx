// import React from "react";
// import styles from "../../shared/Button/Button.module.css";
// import InputField from "../InputField/InputField";

// interface AddRemoveInputProps {
//   placeholder: string;
// }

// export default function AddRemoveInput({ placeholder }: AddRemoveInputProps) {
//   const [field, setField] = React.useState([{ id: 1, header: "", list: "" }]);

//   function addInput() {
//     setField((prevFields) => [
//       ...prevFields,
//       { id: prevFields.length + 1, header: "", list: "" },
//     ]);
//   }

//   function removeInput() {
//     setField((prevFields) =>
//       prevFields.length > 1 ? prevFields.slice(0, -1) : prevFields
//     );
//   }

//   return (
//     <>
//       {field.map((field) => (
//         <div key={field.id}>
//           <InputField
//             fieldName={`add-remove-input-${field.id}`}
//             placeholder={placeholder}
//           />
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addInput}
//         className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
//       >
//         Add
//       </button>

//       <button
//         type="button"
//         onClick={removeInput}
//         className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
//         style={{ marginLeft: "10px" }}
//       >
//         Remove
//       </button>
//     </>
//   );
// }
