import { useFormContext } from "react-hook-form";
import React from "react";
import Accordion from "../../../shared/Accordion/Accordion";
import CheckField from "../../../shared/CheckField/CheckField";
import TextareaField from "../../../shared/TextareaField/TextareaField";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import MainContact from "./MainContact/MainContact";
import SocialContact from "./SocialContact/SocialContact";
import styles from "./Header.module.css";

export default function Header() {
  const { watch, setValue } = useFormContext();
  const summaryChecked = watch("summary");
  const dateOfBirthChecked = watch("dateOfBirth");
  const mainContactChecked = watch("mainContact");
  const socialContactChecked = watch("socialContact");

  React.useEffect(() => {
    if (!summaryChecked) {
      setValue("summaryTextarea", "");
    }

    if (!dateOfBirthChecked) {
      setValue("dateOfBirthInput", "");
    }

    if (!mainContactChecked) {
      setValue("phoneNumber", "");
      setValue("eMail", "");
      setValue("country", "");
      setValue("city", "");
    }

    if (!socialContactChecked) {
      setValue("linkedIn", "");
      setValue("website", "");
      setValue("gitHub", "");
    }
  }, [
    summaryChecked,
    dateOfBirthChecked,
    mainContactChecked,
    socialContactChecked,
  ]);

  return (
    <section className={styles["header-container"]}>
      <Accordion title="Select header fields">
        <CheckField fieldName="Summary" />
        <CheckField fieldName="Date of birth" />
        <CheckField fieldName="Main contact" />
        <CheckField fieldName="Social contact" />
      </Accordion>

      {summaryChecked && (
        <TextareaField
          header="Summary"
          fieldName="summaryTextarea"
          placeholder="Enter your summary"
        />
      )}
      {dateOfBirthChecked && <DateOfBirth fieldName="dateOfBirthInput" />}
      {mainContactChecked && <MainContact />}
      {socialContactChecked && <SocialContact />}
    </section>
  );
}
