function ColorSelect({ item, handleChange, borderActive }) {
  return (
    <section>
      <span>Cores</span>
      <div className="card-configuration">
        {item.colors.map((color, i) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={`color-select bg--${color} ${borderActive}`}
            onClick={() => handleChange(color)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default ColorSelect;
