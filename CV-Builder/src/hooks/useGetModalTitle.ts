import { useNewCVContext } from "./useNewCVContext";

export default function useGetModalTitle() {
  const { currentStep } = useNewCVContext();
  switch (currentStep) {
    case 1:
      return "CV Content";
    //     case 2:
    //       return
    //     case 3:
    //       return
    //     case 4:
    //       return
    //     case 5:
    //       return
    //     default:
    //       return null;
  }
}
