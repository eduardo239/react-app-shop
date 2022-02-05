function ShopInfo({ name, description, price, category, onClick }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <p>
        <small>{category}</small>
      </p>
      <button onClick={onClick} className="btn btn-primary">
        buy now
      </button>
    </div>
  );
}

export default ShopInfo;
