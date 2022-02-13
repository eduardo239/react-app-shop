function CardPrices({ item }) {
  return (
    <section className="card-price mb-2">
      <p className=" small opacity-20 line-through mb-3">R${item.price}</p>
      <p>
        R${item.price} em até 12x de R${(item.price / 12).toFixed(2)}
      </p>
      <p>
        ou <b>{(item.price - item.price / 10).toFixed(2)}</b> à vista com 10% de
        desconto
      </p>
      <p>
        <small>Formas de pagamento</small>
      </p>
    </section>
  );
}

export default CardPrices;
