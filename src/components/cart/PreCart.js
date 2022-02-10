import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputRadio from '../form/InputRadio';

function PreCart() {
  const WARRANTY_VALUE = 99.99;
  let navigate = useNavigate();

  const { userCart, handleUserService, useLocalStorage } =
    useContext(UserContext);
  const [cart, setCart] = useLocalStorage('cart', []);

  const [extendedWarranty, setExtendedWarranty] = useState(
    'Sem garantia estendida'
  );
  const [warrantyAmount, setWarrantyAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [pix, setPix] = useState(0);

  const handleChange = (e) => {
    setExtendedWarranty(e.target.value);
    if (e.target.value !== 'Garantia estendida') setWarrantyAmount(0);
    else setWarrantyAmount(WARRANTY_VALUE);
  };

  const handleNext = (e) => {
    e.preventDefault();

    const payload = {
      _id: '2398423982353205925',
      service_name: extendedWarranty,
      service_time: 1,
      service_amount: warrantyAmount
    };

    setCart([...cart, payload]);

    handleUserService(payload);
    navigate(`/cart`);
  };

  useEffect(() => {
    let total = 0;
    userCart.forEach(({ item }) => (total += item.item_price));
    setTotal(parseFloat(total.toFixed(2)));

    let pix = 0;
    userCart.forEach(({ item }) => {
      let x = (item.item_price - item.item_price / 10).toFixed(2);
      pix += parseFloat(x);
      setPix(parseFloat(pix.toFixed(2)));
    });
  }, [userCart]);
  console.log(userCart);
  return (
    <main>
      <h2>Serviços</h2>
      <div className="cart-list">
        {userCart.length > 0 ? (
          userCart.map((item) => (
            <section key={item.item._id} className="cart-wrapper">
              <div>
                <img className="cart-img" src={poster_default} alt="XXX" />
              </div>
              <div>
                <h4>{item.item.item_name}</h4>
                <p>{item.item.item_info}</p>
              </div>
              <div>
                <h4>Price</h4>
                <p>R${item.item.item_price}</p>
              </div>

              <div className="primary">
                <h4>Preço à vista no PIX</h4>
                <p>
                  R$
                  {(item.item.item_price - item.item.item_price / 10).toFixed(
                    2
                  )}
                </p>
              </div>
            </section>
          ))
        ) : (
          <p>LOADING...</p>
        )}
      </div>
      <hr />
      <div>
        <h3>Garantia estendida</h3>
        <div className="cart-services-wrapper">
          <div>
            <p>
              Aproveite nossos planos de <b>garantia estendida</b> e mantenha o
              seu produto protegido por mais tempo
            </p>
            <div>
              <img className="cart-img" src={poster_default} alt="XXX" />
              <img className="cart-img" src={poster_default} alt="XXX" />
            </div>
            <div>
              <p>O que você perde sem a garantia estendida</p>
              <ul className="table-shipping">
                <li>
                  <InputRadio
                    name="shipping"
                    value="Sem garantia estendida"
                    id="sem-garantia-estendida"
                    checked={true}
                    onChange={(e) => handleChange(e)}
                  />
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>
                <li>
                  <InputRadio
                    name="shipping"
                    value="Garantia estendida"
                    id="garantia-estendida"
                    onChange={(e) => handleChange(e)}
                  />
                  <div>*****</div>
                  <div>R${WARRANTY_VALUE}</div>
                </li>
              </ul>
            </div>
          </div>
          {/* repeat */}
          <div>
            <h4>Serviços</h4>
            <div>
              <p>
                <span>Garantia estendida: </span> <b>R${warrantyAmount}</b>
              </p>
              <p>
                <span>Roubo e furto: </span> <b>R$00</b>
              </p>
            </div>
            <div>
              <p>
                <small>Valor total</small>
              </p>
              <h3>R${(pix + warrantyAmount).toFixed(2)}</h3>
              <p>R${(total + warrantyAmount).toFixed(2)}</p>
            </div>
            <div>
              <button
                className="btn btn-full btn-primary mb-3"
                onClick={handleNext}
              >
                ir para o carrinho
              </button>
              <button
                className="btn btn-full btn-link"
                onClick={() => navigate(`/`)}
              >
                continuar comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PreCart;
