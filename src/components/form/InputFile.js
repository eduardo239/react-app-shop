function InputFile({ type, name, placeholder }) {
  return (
    <div className="inp-section">
      <label htmlFor={name}>{name}</label>
      {/* FIXME: */}
      <input
        className="inp inp-full inp-dark"
        type={type}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputFile;
