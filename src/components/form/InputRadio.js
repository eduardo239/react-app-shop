function InputRadio({ name, value, id, checked, onChange }) {
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
        {value}
      </label>
    </>
  );
}

export default InputRadio;
