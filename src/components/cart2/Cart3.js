import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputRadio from '../form/InputRadio';
import useLocalStorage from '../../hooks/useLocalStorage';

function Cart3() {
  const { cartItems } = useContext(UserContext);
  const [cart, setCart] = useLocalStorage('cart', []);

  let navigate = useNavigate();

  console.log(cartItems);
  // TODO: payment methods
  return (
    <main>
      <h2>Pagamento</h2>

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
