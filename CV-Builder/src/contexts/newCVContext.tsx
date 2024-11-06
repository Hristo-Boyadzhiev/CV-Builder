import React, { createContext, ReactNode } from "react";

interface newCVContextType {
  proba: string;
  setProba: React.Dispatch<React.SetStateAction<string>>;
}

export const newCVContext = createContext<newCVContextType | undefined>(
  undefined
);

export const NewCVContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [proba, setProba] = React.useState("ddddddddd");

  return (
    <newCVContext.Provider
      value={{
        proba,
        setProba,
      }}
    >
      {children}
    </newCVContext.Provider>
  );
};
