function Textarea({ name, placeholder, setValue, value }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{name}</label>
      <textarea
        id={name}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        rows="5"
      ></textarea>
    </div>
  );
}

export default Textarea;
