function InputAdd({
  type,
  name,
  placeholder,
  value,
  button,
  onClick,
  onChange
}) {
  return (
    <div className="inp-section-inline">
      <label htmlFor={name}>{name}</label>

      <div>
        <input
          className="inp inp-full inp-dark"
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button className="btn btn-primary" onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default InputAdd;
