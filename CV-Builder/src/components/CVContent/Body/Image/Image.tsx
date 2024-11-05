import { Controller, useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";

export default function Image() {
  const { control } = useFormContext();
  return (
    <Accordion title="Image">
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="image"
            />
            <label className="form-check-label" htmlFor="image">
              Image
            </label>
          </div>
        )}
      />
    </Accordion>
  );
}
