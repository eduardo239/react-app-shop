function Textarea({ name, placeholder, setValue, value }) {
  return (
    <div className="inp-section">
      <label htmlFor={name}>{name}</label>
      <textarea
        id={name}
        className="inp inp-full inp-dark"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        rows="5"
      ></textarea>
    </div>
  );
}

export default Textarea;
