import { Controller, useFormContext } from "react-hook-form";

export default function Image() {
  const { control } = useFormContext();
  return (
    <Controller
      name="upload-image"
      control={control}
      render={({ field }) => (
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                field.onChange(e.target.files[0]);
              }
            }}
          />
        </div>
      )}
    />
  );
}
