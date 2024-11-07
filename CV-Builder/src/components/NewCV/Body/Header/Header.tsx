import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";

export default function Header() {
  return (
    <Accordion title="Select header fields">
      <CheckField fieldName="Summary" />
      <CheckField fieldName="Date of birth" />
      <CheckField fieldName="Main contact" />
      <CheckField fieldName="Social contact" />
    </Accordion>
  );
}
