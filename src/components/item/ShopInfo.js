function ShopInfo({ name, description, price, category, onClick }) {
  return (
    <section className="item-info">
      <div className="flex-1">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <hr className="hr-primary" />

        <div className="item-colors">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>

        <hr className="hr-primary" />

        <div>
          <p className="opacity-40">R${price}</p>
          <p>
            R${price} em até 12x de R${(price / 12).toFixed(2)}
          </p>
          <p>
            ou R${(price - price / 10).toFixed(2)} à vista com 10% de desconto
          </p>
        </div>
      </div>

      <div>
        <button onClick={onClick} className="btn btn-primary btn-full">
          buy now
        </button>
      </div>
    </section>
  );
}

export default ShopInfo;
