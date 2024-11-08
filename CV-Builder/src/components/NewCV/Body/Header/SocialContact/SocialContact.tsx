import InputField from "../../../../shared/InputField/InputField";
import styles from "../../../../shared/css/fieldContainer.module.css";

export default function SocialContact() {
  return (
    <article className={styles["field-container"]}>
      <h6>Social Contact</h6>
      <InputField fieldName="linkedIn" placeholder="linkedIn" />
      <InputField fieldName="website" placeholder="Website" />
      <InputField fieldName="gitHub" placeholder="GitHub" />
    </article>
  );
}
