import { useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";
import AddRemovePairInputs from "../../../shared/AddRemovePairInputs/AddRemovePairInputs";
import AddRemoveInput from "../../../shared/AddRemoveInput/AddRemoveInput";
import styles from "../../../shared/css/sectionContainer.module.css";
import React from "react";

export default function Skills() {
  const { watch, setValue } = useFormContext();
  const technicalSkillsChecked = watch("technicalSkills");
  const softSkillsChecked = watch("softSkills");
  const [resetSoftSkillFields, setResetSoftSkillFields] = React.useState(false);
  const [resetTechnicalSkillFields, setResetTechnicalSkillFields] =
    React.useState(false);

  React.useEffect(() => {
    if (!softSkillsChecked) {
      setValue("softSkillInput", "");
      setResetSoftSkillFields(true);
    } else {
      setResetSoftSkillFields(false);
    }

    if (!technicalSkillsChecked) {
      setValue("technicalSkillHeader-1", "");
      setValue("technicalSkillList-1", "");
      setResetTechnicalSkillFields(true);
    } else {
      setResetTechnicalSkillFields(false);
    }
  }, [softSkillsChecked, technicalSkillsChecked]);

  return (
    <section className={styles["section-container"]}>
      <Accordion title="Skills">
        <CheckField fieldName="Technical Skills" />
        <CheckField fieldName="Soft Skills" />
      </Accordion>

      {technicalSkillsChecked && (
        <AddRemovePairInputs
          header="Technical Skills"
          placeholderHeader="Technical skill header"
          placeholderList="Technical skill list"
          firstInputFieldName="technicalSkillHeader"
          secondInputFieldName="technicalSkillList"
          resetFields={resetTechnicalSkillFields}
        />
      )}
      {softSkillsChecked && (
        <AddRemoveInput
          header="SoftSkills"
          fieldName="softSkillInput"
          placeholder="Enter soft skill"
          resetFields={resetSoftSkillFields}
        />
      )}
    </section>
  );
}
