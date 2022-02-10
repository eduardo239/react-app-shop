function Input({
  type,
  name,
  placeholder,
  setValue,
  value,
  disabled,
  onChange
}) {
  return (
    <div className="inp-section">
      <label htmlFor={name}>{name}</label>
      <input
        className="inp inp-full inp-dark"
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled ? disabled : false}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
