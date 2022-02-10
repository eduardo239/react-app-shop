import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputAdd from '../form/InputAdd';
import Input from '../form/Input';
import useLocalStorage from '../../hooks/useLocalStorage';

function Cart2() {
  let navigate = useNavigate();
  const { cartItems } = useContext(UserContext);
  const [cart, setCart] = useLocalStorage('cart', []);
  const [quantity, setQuantity] = useState(0);
  const [cep, setCep] = useState(0);

  const handleChangeQuantity = (e, index) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value);
      cartItems[index].item.quantity = e.target.value;
      setCart(cartItems);
    } else {
      console.log('erro na quantidade');
    }
  };

  return (
    <main>
      <h2>Carrinho</h2>

      <main>
        <section>
          <div>
            <h4>Selecione o seu endereço</h4>

            <InputAdd
              button="buscar"
              onChange={(e) => setCep(e.target.value)}
              name="CEP"
              type="text"
              placeholder="Item category"
              setValue={setCep}
              value={cep}
            />
          </div>
        </section>
        <section>
          {cartItems.length > 0 &&
            cartItems.map(({ item }, index) => (
              <div className="flex" key={index}>
                <p>{item.name}</p>

                <ul>
                  <li>
                    <Input
                      name="Quantidade"
                      type="number"
                      placeholder="Quantidade de itens"
                      onChange={(e) => handleChangeQuantity(e, index)}
                      value={item.quantity}
                    />
                    <div>*****</div>
                    <div>R$0.00</div>
                  </li>
                </ul>
              </div>
            ))}
        </section>
        <div>
          <button className="btn btn-link" onClick={() => navigate(`/cart-1`)}>
            voltar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/cart-3`)}
          >
            próximo
          </button>
        </div>
      </main>
    </main>
  );
}

export default Cart2;
