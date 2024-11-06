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
}

export const newCVContext = createContext<newCVContextType | undefined>(
  undefined
);

export const NewCVContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    setCurrentStep((prev) => prev + 1);
  };

  function handleBack() {
    setCurrentStep((prev) => prev - 1);
  }

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setCurrentStep(1);
    setIsModalOpen(false);
    // Reset other states if needed
  };

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
      }}
    >
      {children}
    </newCVContext.Provider>
  );
};
