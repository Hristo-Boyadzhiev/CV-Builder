import { useNewCVContext } from "../../../hooks/useNewCVContext";
import Header from "./Header/Header";
import NewCVContent from "./NewCVContent/FormContent";
import Skills from "./Skills/Skills";

export default function Body() {
  const { stepName } = useNewCVContext();
  switch (stepName) {
    case "newCvContent":
      return <NewCVContent />;
    case "image":
      // return <NewDeliveryStep2Form />;
      return <p>Image form</p>;
    case "header":
      return <Header />;
    case "skills":
      return <Skills />;
    case "languages":
      return;
    case "certificates":
      return;
    case "projects":
      return;
    case "achievements":
      return;
    case "work":
      return;
    case "education":
      return;
    default:
      return null;
  }
}
