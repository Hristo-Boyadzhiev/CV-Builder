interface ModalProps {
  type?: string;
  children: React.ReactNode;
}

export default function Modal({ type, children }: ModalProps) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-3}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog ${type}`}>
        <div className="modal-content">
          {children}
          {/* <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">body</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}