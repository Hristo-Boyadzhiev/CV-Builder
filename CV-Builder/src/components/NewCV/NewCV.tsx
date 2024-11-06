import useGetModalTitle from "../../hooks/useGetModalTitle";
import { useNewCVContext } from "../../hooks/useNewCVContext";
import NewCVFormContent from "./NewCVFormContent/NewCVFormContent";

export default function NewCV() {
  const { closeModal } = useNewCVContext();
  const modalTitle = useGetModalTitle();
  return (
    <>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          {modalTitle}
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
        ></button>
      </div>
      <NewCVFormContent />
    </>
  );
}
