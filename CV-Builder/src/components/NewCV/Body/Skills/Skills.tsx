import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";

export default function Skills() {
  return (
    <Accordion title="Skills">
      <CheckField fieldName="Technical Skills" />
      <CheckField fieldName="Soft Skills" />
    </Accordion>
  );
}
