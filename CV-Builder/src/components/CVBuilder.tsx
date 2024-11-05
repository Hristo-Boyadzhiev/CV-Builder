import styles from "./CVBuilder.module.css";
import Button from "./shared/Button/Button";

export default function CVBuilder() {
  return (
    <section className={styles["app-container"]}>
      <header>
        <h1 className={styles["fade-in"]}>
          Do you want to create an impressive resume quickly and easily?
        </h1>
        <h3 className={styles["fade-in"]} style={{ animationDelay: "1.5s" }}>
          Enter your details and choose from the ready-made templates.
        </h3>
      </header>
      <Button
        content="Get Started"
        isOpenModal={true}
        className={`${styles["fade-in"]}`}
      />
    </section>
  );
}
