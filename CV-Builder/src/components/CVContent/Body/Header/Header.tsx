// import { Controller, useFormContext } from "react-hook-form";
// import Accordion from "../../../shared/Accordion/Accordion";

// export default function Header() {
//   const { control } = useFormContext();
//   return (
//     <Accordion title="Header">
//       <Controller
//         name="isHaveSummary"
//         control={control}
//         render={({ field }) => (
//           <div className="form-check form-switch">
//             <input
//               {...field}
//               type="checkbox"
//               role="switch"
//               className="form-check-input"
//               id="isHaveSummary"
//             />
//             <label className="form-check-label" htmlFor="isHaveSummary">
//               Summary
//             </label>
//           </div>
//         )}
//       />

//       <Controller
//         name="dateOfBirth"
//         control={control}
//         render={({ field }) => (
//           <div className="form-check form-switch">
//             <input
//               {...field}
//               type="checkbox"
//               role="switch"
//               className="form-check-input"
//               id="dateOfBirth"
//             />
//             <label className="form-check-label" htmlFor="dateOfBirth">
//               Date of birth
//             </label>
//           </div>
//         )}
//       />

//       <Controller
//         name="mainContact"
//         control={control}
//         render={({ field }) => (
//           <div className="form-check form-switch">
//             <input
//               {...field}
//               type="checkbox"
//               role="switch"
//               className="form-check-input"
//               id="mainContact"
//             />
//             <label className="form-check-label" htmlFor="mainContact">
//               Main contact
//             </label>
//           </div>
//         )}
//       />

//       <Controller
//         name="socialContact"
//         control={control}
//         render={({ field }) => (
//           <div className="form-check form-switch">
//             <input
//               {...field}
//               type="checkbox"
//               role="switch"
//               className="form-check-input"
//               id="socialContact"
//             />
//             <label className="form-check-label" htmlFor="socialContact">
//               Social contact
//             </label>
//           </div>
//         )}
//       />
//     </Accordion>
//   );
// }
