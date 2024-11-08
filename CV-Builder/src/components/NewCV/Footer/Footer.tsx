import { useFormContext } from "react-hook-form";
import { useNewCVContext } from "../../../hooks/useNewCVContext";
import styles from "../../shared/css/button.module.css";
import React from "react";
import areFilledFields from "../../../utils/areFilledFields";

export default function Footer() {
  const { currentStep, handleBack, closeModal } = useNewCVContext();
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const { reset, watch } = useFormContext();
  const formValues = watch();

  React.useEffect(() => {
    setIsSubmitDisabled(!areFilledFields(formValues));
  }, [formValues]);

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
        disabled={isSubmitDisabled}
      >
        Confirm
      </button>
    </>
  );
}
