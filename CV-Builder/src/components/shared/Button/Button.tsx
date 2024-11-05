import CVContent from "../../CVContent/CVContent";
import Modal from "../Modal/Modal";
import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className?: string;
  isOpenModal?: boolean;
}

export default function Button({
  content,
  isOpenModal,
  className,
}: ButtonProps) {
  return (
    <>
      <button
        type="button"
        data-bs-toggle={isOpenModal ? "modal" : undefined}
        data-bs-target={isOpenModal ? "#exampleModal" : undefined}
        className={`btn btn-outline-secondary ${styles["customize-button"]} ${styles["btn-black"]} ${className}`}
        style={{ animationDelay: "2s" }}
      >
        {content}
      </button>

      {isOpenModal && (
        <Modal type={"modal-dialog-centered"}>
          <CVContent />
        </Modal>
      )}
    </>
  );
}
