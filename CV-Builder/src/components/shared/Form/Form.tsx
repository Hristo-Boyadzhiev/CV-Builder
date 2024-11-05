import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React from "react";

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  const methods = useForm<any>();

  const handleFormSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmit)}>{children}</form>
    </RHFProvider>
  );
}
