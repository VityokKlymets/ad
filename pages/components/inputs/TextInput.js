import React from "react";
const TextInput = ({
  name = "name",
  value,
  label,
  placeholder,
  error,
  onChange,
  required,
  textarea,
  type,
  pattern
}) => (
  <div className="form-group">
    <label
      className={`col-form-label ${!!required ? "required" : ""}`}
      htmlFor={name}
    >
      {label} :
    </label>
    {!!textarea ? (
      <textarea
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
      />
    ) : (
      <input
        type={type ? type : "text"}
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
        pattern={pattern ? pattern : ""}
      />
    )}
    <div className="invalid-feedback">{error}</div>
  </div>
);
export default TextInput;
