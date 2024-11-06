// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// export default function Accordion({ title, children }: AccordionProps) {
//   return (
//     <div className="accordion" id={`accordion-${title}`}>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={`#collapse-${title}`}
//             aria-expanded="false"
//             aria-controls={`collapse-${title}`}
//           >
//             {title}
//           </button>
//         </h2>
//         <div
//           id={`collapse-${title}`}
//           className="accordion-collapse collapse"
//           data-bs-parent={`#accordion-${title}`}
//         >
//           <div className="accordion-body">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
