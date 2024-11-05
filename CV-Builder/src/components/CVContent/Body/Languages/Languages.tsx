import { Controller, useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";

export default function Languages() {
  const { control } = useFormContext();
  return (
    <Accordion title="Languages">
      <Controller
        name="languages"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="languages"
            />
            <label className="form-check-label" htmlFor="languages">
              Languages
            </label>
          </div>
        )}
      />
    </Accordion>
  );
}
