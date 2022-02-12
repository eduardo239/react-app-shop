function Textarea({ name, placeholder, onChange, value }) {
  return (
    <div className="inp-section">
      <label htmlFor={name}>{name}</label>
      <textarea
        id={name}
        className="inp inp-full inp-dark"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows="5"
      ></textarea>
    </div>
  );
}

export default Textarea;
