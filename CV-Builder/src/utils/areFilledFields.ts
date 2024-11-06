import { FieldValues } from "react-hook-form";

export default function areFilledFields(formValues: FieldValues): boolean {
  return Object.values(formValues).some((value) => value === true);
}
