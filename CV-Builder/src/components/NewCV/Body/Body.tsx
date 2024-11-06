import { useNewCVContext } from "../../../hooks/useNewCVContext";
import NewCVContent from "../NewCVContent/FormContent";

export default function Body() {
  const { currentStep } = useNewCVContext();
  switch (currentStep) {
    case 1:
      return <NewCVContent />;
    case 2:
      // return <NewDeliveryStep2Form />;
      return <p>Step 2</p>;
    case 3:
      //   return <NewDeliveryStep3Form  />;
      return <p>Step 3</p>;
    // case 4:
    //   return <NewDeliveryStep4Form  />;
    // case 5:
    //   return <NewDeliveryStep5Form />;
    default:
      return null;
  }
}
