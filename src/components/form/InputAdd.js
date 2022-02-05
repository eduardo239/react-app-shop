function Input({ type, name, placeholder, setValue, value, onClick }) {
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
      <button
        style={{ marginLeft: '-1rem' }}
        onClick={onClick}
        className="btn btn-primary"
      >
        add
      </button>
    </div>
  );
}

export default Input;
