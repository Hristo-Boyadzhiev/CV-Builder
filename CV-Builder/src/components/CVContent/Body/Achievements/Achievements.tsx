import { Controller, useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";

export default function Achievements() {
  const { control } = useFormContext();
  return (
    <Accordion title="Achievements">
      <Controller
        name="achievements"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="achievements"
            />
            <label className="form-check-label" htmlFor="achievements">
              Achievements
            </label>
          </div>
        )}
      />
    </Accordion>
  );
}
