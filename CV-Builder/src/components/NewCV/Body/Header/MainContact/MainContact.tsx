import InputField from "../../../../shared/InputField/InputField";

export default function MainContact() {
  return (
    <>
      <InputField fieldName="phoneNumber" placeholder="Phone Number" />
      <InputField fieldName="eMail" placeholder="E-mail" />
      <InputField fieldName="country" placeholder="Country" />
      <InputField fieldName="city" placeholder="City" />
    </>
  );
}
