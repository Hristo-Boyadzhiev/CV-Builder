import { useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";
import TextareaField from "../../../shared/CheckField/TextAreaField";

export default function Header() {
  const { watch } = useFormContext();
  const summaryChecked = watch("summary");
  const dateOfBirthChecked = watch("dateOfBirth");
  const mainContactChecked = watch("mainContact");
  const socialContactChecked = watch("socialContact");
  return (
    <>
      <Accordion title="Select header fields">
        <CheckField fieldName="Summary" />
        <CheckField fieldName="Date of birth" />
        <CheckField fieldName="Main contact" />
        <CheckField fieldName="Social contact" />
      </Accordion>

      {summaryChecked && <TextareaField fieldName="summary-textarea" />}
      {dateOfBirthChecked && <p>date of birth</p>}
      {mainContactChecked && <p>main contact</p>}
      {socialContactChecked && <p>social contact</p>}
    </>
  );
}
