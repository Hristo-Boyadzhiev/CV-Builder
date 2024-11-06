import { useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import styles from "../../shared/Button/Button.module.css";

export default function Footer() {
  const { currentStep, handleBack, closeModal } = useNewCVContext();
  const { reset } = useFormContext();

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
        onClick={
          currentStep
            ? currentStep === 1
              ? handleClose
              : handleBack
            : handleClose
        }
      >
        {currentStep === 1 ? "Exit" : "Back"}
      </button>
      <button
        type="submit"
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]}`}
      >
        Confirm
      </button>
    </>
  );
}
