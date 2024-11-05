import styles from "../../shared/Button/Button.module.css";

export default function Footer() {
  return (
    <>
      <button
        type="button"
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button
        type="submit"
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
      >
        Save changes
      </button>
    </>
  );
}
