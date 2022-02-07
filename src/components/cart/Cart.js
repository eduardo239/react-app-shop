import { useState } from 'react';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputAdd from '../form/InputAdd';
import Input from '../form/Input';
import { useNavigate } from 'react-router-dom';

function Cart() {
  let navigate = useNavigate();

  const [cep, setCEP] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [promo, setPromo] = useState('');
  const [shipping, setShipping] = useState(null);

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };

  const handleAddAddress = () => {};

  return (
    <main>
      <h2>Carrinho</h2>
      <div className="cart-grid">
        <div>
          <div>
            <h4>Selecione o seu endereço</h4>
            <InputAdd
              button="ok"
              onClick={handleAddAddress}
              name="Categoria"
              type="text"
              placeholder="Item category"
              setValue={setCEP}
              value={cep}
            />
          </div>
          {/*  */}
          <div className="cart-wrapper">
            <div>
              <img className="cart-img" src={poster_default} alt="XXX" />
            </div>
            <div>
              <h4>Quantidade</h4>
              <Input
                name="Preço"
                type="number"
                placeholder="Preço do produto"
                setValue={setQuantity}
                value={quantity}
              />
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
          {/*  */}
          <div className="cart-shipping">
            <h4>Frete</h4>
            <div>
              <ul
                className="table-shipping"
                onChange={(e) => handleShipping(e)}
              >
                <li>
                  <input
                    type="radio"
                    name="shipping"
                    value="FEDEX"
                    id="fedex"
                  />
                  <label htmlFor="fedex">FEDEX</label>
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>

                <li>
                  <input
                    type="radio"
                    name="shipping"
                    value="SEDEX"
                    id="sedex"
                  />
                  <label htmlFor="sedex">SEDEX</label>
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>
              </ul>
            </div>
          </div>
          {/* PROMO */}
          <div className="cart-promo">
            <h4>Cupom</h4>
            <InputAdd
              button="Aplicar"
              name="Cupom"
              type="text"
              placeholder="Aplicar cupom de desconto"
              setValue={setPromo}
              value={promo}
            />
          </div>
        </div>

        <div>
          <h4>Resumo</h4>
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
              onClick={() => navigate(`/checkout`)}
            >
              ir para o pagamento
            </button>
            <button
              className="btn btn-full btn-link"
              onClick={() => navigate(`/`)}
            >
              continuar comprando
            </button>
            <button
              className="btn btn-full btn-link"
              onClick={() => navigate(`/pre-cart`)}
            >
              voltar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
