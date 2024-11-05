import Form from "../../shared/Form/Form";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

export default function FormContent() {
  return (
    <Form>
      <div className="modal-body">
        <Body />
      </div>
      <div className="modal-footer">
        <Footer />
      </div>
    </Form>
  );
}
