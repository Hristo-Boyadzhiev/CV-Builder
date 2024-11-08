import InputField from "../../../../shared/InputField/InputField";
import styles from "../../../../shared/css/fieldContainer.module.css";

export default function MainContact() {
  return (
    <article className={styles["field-container"]}>
      <h6>Main Contact</h6>
      <InputField fieldName="phoneNumber" placeholder="Phone Number" />
      <InputField fieldName="eMail" placeholder="E-mail" />
      <InputField fieldName="country" placeholder="Country" />
      <InputField fieldName="city" placeholder="City" />
    </article>
  );
}
