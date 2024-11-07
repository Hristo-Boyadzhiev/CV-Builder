import { useNewCVContext } from "../../../hooks/useNewCVContext";
import Header from "./Header/Header";
import NewCVContent from "./NewCVContent/FormContent";

export default function Body() {
  const { stepName } = useNewCVContext();
  switch (stepName) {
    case "newCvContent":
      return <NewCVContent />;
    case "image":
      // return <NewDeliveryStep2Form />;
      return <p>Step 2</p>;
    case "header":
      return <Header />;
    case "skills":
    //   return <NewDeliveryStep4Form  />;
    case "languages":
    //   return <NewDeliveryStep5Form />;
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
