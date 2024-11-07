import React, { createContext, ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

interface newCVContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: SubmitHandler<any>;
  handleBack: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  activeSteps: string[];
  formsData: { [key: string]: any };
  stepName: string;
  setStepName: React.Dispatch<React.SetStateAction<string>>;
}

export const newCVContext = createContext<newCVContextType | undefined>(
  undefined
);

export const NewCVContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false); //for manually manage Modal
  const [activeSteps, setActiveSteps] = React.useState<string[]>([
    "newCvContent",
  ]);
  const [stepName, setStepName] = React.useState("newCvContent");
  const [formsData, setFormsData] = React.useState({});

  React.useEffect(() => {
    const stepIndex = currentStep - 1;
    if (stepIndex >= 0 && stepIndex < activeSteps.length) {
      setStepName(activeSteps[stepIndex]);
    }
  }, [currentStep, activeSteps]);

  const onSubmit: SubmitHandler<any> = (data) => {
    if (activeSteps.length === 1 && activeSteps[0] === "newCvContent") {
      const selectedSteps = Object.keys(data).filter((field) => data[field]);
      const newActiveSteps = activeSteps.concat(selectedSteps);
      setActiveSteps(newActiveSteps);
    }
    console.log(data);
    setFormsData(data);
    setCurrentStep((prev) => prev + 1);
  };

  function handleBack() {
    if (currentStep === 2) {
      setActiveSteps(["newCvContent"]);
    }
    setCurrentStep((prev) => prev - 1);
  }

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setCurrentStep(1);
    setIsModalOpen(false);
    setActiveSteps(["newCvContent"]);
    setStepName("newCvContent");
    setFormsData({});
    // Reset other states if needed
  };

  console.log(activeSteps);

  return (
    <newCVContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        onSubmit,
        handleBack,
        isModalOpen,
        openModal,
        closeModal,
        activeSteps,
        formsData,
        stepName,
        setStepName,
      }}
    >
      {children}
    </newCVContext.Provider>
  );
};
