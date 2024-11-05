import { Controller, useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";

export default function Certificates() {
  const { control } = useFormContext();
  return (
    <Accordion title="Certificates">
      <Controller
        name="certificates"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="certificates"
            />
            <label className="form-check-label" htmlFor="certificates">
              Certificates
            </label>
          </div>
        )}
      />
    </Accordion>
  );
}
