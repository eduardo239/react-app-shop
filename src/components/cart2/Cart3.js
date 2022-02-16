import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputRadio from '../form/InputRadio';
import useLocalStorage from '../../hooks/useLocalStorage';

function Cart3() {
  const { cartItems, address, setPayment, payment } = useContext(UserContext);
  const [cart, setCart] = useLocalStorage('cart', []);

  let navigate = useNavigate();

  console.log(cartItems);
  console.log(address);
  // TODO: payment methods
  return (
    <main>
      <h2>Pagamento</h2>

      <section>
        {cartItems.length > 0 &&
          cartItems.map(({ item, services }, index) => (
            <div key={index}>
              <h4>
                {item.name} - {item.storage}GB - {item.color}
              </h4>
              <p>R${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>Garantia: {services.name}</p>
            </div>
          ))}
      </section>
      <section>
        <h4>Endereço de entrega</h4>
        {address ? (
          <div>
            <p>{address.local.logradouro}</p>
            <p>Número: {address.number}</p>
            <p>Bairro: {address.local.bairro}</p>
          </div>
        ) : (
          <p>Não há endereço registrado</p>
        )}
      </section>

      <section>
        <h4>Forma de pagamento</h4>
        <InputRadio
          label="Cartão de crédito"
          name="payment"
          value="creditCard"
          id="creditCard"
          checked={payment === 'creditCard'}
          onChange={(e) => setPayment(e.target.value)}
        />

        <InputRadio
          label="Boleto"
          name="payment"
          value="boleto"
          id="boleto"
          checked={payment === 'boleto'}
          onChange={(e) => setPayment(e.target.value)}
        />
      </section>

      <div className="cart-buttons">
        <button className="btn btn-link" onClick={() => navigate(`/cart-2`)}>
          voltar
        </button>
        <button className="btn btn-primary" onClick={() => navigate(`/`)}>
          voltar a página inicial
        </button>
      </div>
    </main>
  );
}

export default Cart3;
