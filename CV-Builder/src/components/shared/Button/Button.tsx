import React from "react";
import Modal from "../Modal/Modal";
import styles from "../css/button.module.css";
import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface ButtonProps {
  title: string;
  modalContent?: React.ReactNode;
  className?: string;
}

export default function Button({
  title,
  modalContent,
  className,
}: ButtonProps) {
  const { openModal } = useNewCVContext();
  return (
    <>
      <button
        type="button"
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]} ${className}`}
        style={{ animationDelay: "2s" }}
        onClick={openModal}
      >
        {title}
      </button>

      {modalContent && (
        <Modal type={"modal-dialog-centered"}>{modalContent}</Modal>
      )}
    </>
  );
}
