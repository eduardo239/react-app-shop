import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputRadio from '../form/InputRadio';
import useLocalStorage from '../../hooks/useLocalStorage';

function Cart1() {
  const SGE = 'SGE';
  const CGE = 'CGE';
  const WVL = 99.99;

  let navigate = useNavigate();
  const { setCartServices, cartItems } = useContext(UserContext);

  const [cart, setCart] = useLocalStorage('cart', []);
  const [extendedWarranty, setExtendedWarranty] = useState(SGE);

  // const handleAddService = (item) => {
  //   setCart([...cart, item]);
  //   setCartServices([...cart, item]);
  // };

  const handleChangeWarranty = (e, index) => {
    cartItems[index].services.name = e.target.value;
    cartItems[index].services.price = WVL;
    cartItems[index].services.createdAt = new Date();
    setCart(cartItems);
  };

  return (
    <main>
      <h2>Serviços</h2>

      <section>
        {cartItems.length > 0 &&
          cartItems.map(({ item }, index) => (
            <div className="flex" key={index}>
              <p>{item.name}</p>

              <ul className="table-shipping">
                <li>
                  <InputRadio
                    label="Sem garantia estendida"
                    name={`warranty-${index}`}
                    value={SGE}
                    id={`${index}-0`}
                    checked={true}
                    onChange={(e) => handleChangeWarranty(e, index)}
                  />
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>
                <li>
                  <InputRadio
                    label="Com garantia estendida"
                    name={`warranty-${index}`}
                    value={CGE}
                    id={`${index}-1`}
                    onChange={(e) => handleChangeWarranty(e, index)}
                  />
                  <div>*****</div>
                  <div>R${WVL}</div>
                </li>
              </ul>
            </div>
          ))}
      </section>
      {/*  */}

      <div>
        <button className="btn btn-link" onClick={() => navigate(`/`)}>
          voltar
        </button>
        <button className="btn btn-primary" onClick={() => navigate(`/cart-2`)}>
          próximo
        </button>
      </div>
    </main>
  );
}

export default Cart1;
