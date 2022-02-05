function Input({ type, name, placeholder, setValue, value }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default Input;
