function InputFile({ type, name, placeholder }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      {/* FIXME: */}
      <input type={type} id={name} placeholder={placeholder} />
    </div>
  );
}

export default InputFile;
