import { useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";
import AddRemovePairInputs from "../../../shared/AddRemovePairInputs/AddRemovePairInputs";
import AddRemoveInput from "../../../shared/AddRemoveInput/AddRemoveInput";

export default function Skills() {
  const { watch } = useFormContext();
  const technicalSkillsChecked = watch("technicalSkills");
  const softSkillsChecked = watch("softSkills");

  return (
    <>
      <Accordion title="Skills">
        <CheckField fieldName="Technical Skills" />
        <CheckField fieldName="Soft Skills" />
      </Accordion>

      {/* {technicalSkillsChecked && (
        <AddRemovePairInputs
          placeholderHeader="Technical skill header"
          placeholderList="Technical skill list"
          firstInputFieldName="technicalSkillHeader"
          secondInputFieldName="technicalSkillList"
        />
      )}
      {softSkillsChecked && <AddRemoveInput placeholder="Enter soft skill" />} */}
    </>
  );
}
