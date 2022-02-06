function Input({ type, name, placeholder, setValue, value, disabled }) {
  return (
    <div className="inp-section">
      <label htmlFor={name}>{name}</label>
      <input
        className="inp inp-full inp-dark"
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
}

export default Input;
