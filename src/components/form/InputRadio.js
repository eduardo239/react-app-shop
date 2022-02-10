function InputRadio({ name, value, id, checked, label, onChange }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label className="inp-radio-label" htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export default InputRadio;
