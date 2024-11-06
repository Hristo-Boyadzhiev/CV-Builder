import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React from "react";
import { useNewCVContext } from "../../../hooks/useNewCVContext";

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  const { onSubmit } = useNewCVContext();
  const methods = useForm<any>();

  const handleFormSubmit: SubmitHandler<any> = (data, event) => {
    onSubmit(data, event);
    methods.reset();
    // onCloseDialog();
  };

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmit)}>{children}</form>
    </RHFProvider>
  );
}
