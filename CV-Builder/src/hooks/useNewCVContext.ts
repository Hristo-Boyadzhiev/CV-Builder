import { useContext } from "react";
import { newCVContext } from "../contexts/newCVContext";

export const useNewCVContext = () => {
  const context = useContext(newCVContext);
  if (!context) {
    throw new Error(
      "useNewCVContext must be used within a newCVContextProvider"
    );
  }
  return context;
};
