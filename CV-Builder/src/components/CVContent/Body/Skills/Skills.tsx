import { Controller, useFormContext } from "react-hook-form";
import Accordion from "../../../shared/Accordion/Accordion";

export default function Skills() {
  const { control } = useFormContext();
  return (
    <Accordion title="Skills">
      <Controller
        name="technicalSkills"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="technicalSkills"
            />
            <label className="form-check-label" htmlFor="technicalSkills">
              Technical Skills
            </label>
          </div>
        )}
      />

      <Controller
        name="softSkills"
        control={control}
        render={({ field }) => (
          <div className="form-check form-switch">
            <input
              {...field}
              type="checkbox"
              role="switch"
              className="form-check-input"
              id="softSkills"
            />
            <label className="form-check-label" htmlFor="softSkills">
              Soft Skills
            </label>
          </div>
        )}
      />
    </Accordion>
  );
}
