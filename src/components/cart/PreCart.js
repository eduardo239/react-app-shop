import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';
import { UserContext } from '../../context/UserContext';
import InputRadio from '../form/InputRadio';

function PreCart() {
  let navigate = useNavigate();
  const { userOrder, setUserOrder } = useContext(UserContext);

  const [value, setValue] = useState(null);
  const [time, setTime] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();

    const payload = {
      extendedWarranty: value,
      warrantyTime: time
    };

    setUserOrder([...userOrder, payload]);

    navigate(`/cart`);
  };

  console.log(userOrder);
  console.log(value);
  return (
    <main>
      <h2>Serviços</h2>
      <div className="cart-wrapper">
        <div>
          <img className="cart-img" src={poster_default} alt="XXX" />
        </div>
        <div>
          <h4>Title</h4>
          <p>Description</p>
        </div>
        <div>
          <h4>Price</h4>
          <p>$0.00</p>
        </div>

        <div className="primary">
          <h4>Preço à vista no PIX</h4>
          <p>$0.00</p>
        </div>
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
                </li>
                <li>
                  <InputRadio
                    name="shipping"
                    value="Garantia estendida"
                    id="gara-estendida"
                    onChange={(e) => handleChange(e)}
                  />
                </li>
                <li>setTime</li>
              </ul>
            </div>
          </div>
          {/* repeat */}
          <div>
            <h4>Serviços</h4>
            <div>
              <p>
                <span>Garantia estendida: </span> <b>R$0.00</b>
              </p>
              <p>
                <span>Roubo e furto: </span> <b>R$0.00</b>
              </p>
            </div>
            <div>
              <p>
                <small>Valor total</small>
              </p>
              <h3>R$0.00</h3>
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
