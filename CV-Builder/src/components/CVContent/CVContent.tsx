import FormContent from "./FormContent/FormContent";

export default function CVContent() {
  return (
    <>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          CV Content
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <FormContent />
    </>
  );
}
