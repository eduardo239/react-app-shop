function Input({ type, name, placeholder, setValue, value, button, onClick }) {
  return (
    <div className="inp-section-inline">
      <label htmlFor={name}>{name}</label>

      <div>
        <input
          className="inp inp-full inp-dark"
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="btn btn-primary" onClick={onClick}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default Input;
