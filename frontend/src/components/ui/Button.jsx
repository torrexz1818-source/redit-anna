function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  as = "input",
  rows = 5,
}) {
  return (
    <div className="ui-field">
      {label && (
        <label className="ui-field__label" htmlFor={name}>
          {label}
        </label>
      )}

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="ui-field__control ui-field__control--textarea"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="ui-field__control"
        />
      )}
    </div>
  );
}

export default Input;