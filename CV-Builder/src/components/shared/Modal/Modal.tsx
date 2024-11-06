import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface ModalProps {
  type?: string;
  children: React.ReactNode;
}

export default function Modal({ type, children }: ModalProps) {
  const { isModalOpen } = useNewCVContext();

  if (!isModalOpen) return null;

  return (
    <>
      {/* add Backdrop around modal*/}
      <div
        className={`modal-backdrop fade ${isModalOpen ? "show" : ""}`}
        style={{ display: isModalOpen ? "block" : "none" }}
      ></div>

      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="exampleModal"
        tabIndex={-1}
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className={`modal-dialog ${type}`}>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}
