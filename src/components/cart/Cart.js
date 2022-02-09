import { useContext, useState } from 'react';
import poster_default from '../../assets/poster_default_1_4.jpg';
import InputAdd from '../form/InputAdd';
import Input from '../form/Input';
import { useNavigate } from 'react-router-dom';
import InputRadio from '../form/InputRadio';
import addressApis from '../../api/cep';
import { UserContext } from '../../context/UserContext';

function Cart() {
  let navigate = useNavigate();
  const { userOrder, setUserOrder } = useContext(UserContext);

  const [quantity, setQuantity] = useState(1);
  const [promo, setPromo] = useState('PROMO');
  const [shipping, setShipping] = useState(null);
  const [cepNumber, setCepNumber] = useState('08021020');
  const [cep, setCep] = useState(null);

  const handleCEP = async () => {
    const { data } = await addressApis.cepSearch(cepNumber);
    setUserOrder([...userOrder, { address: data }]);
    setCep(data);
  };

  const handleShipping = (e) => setShipping(e.target.value);

  const handleNext = (e) => {
    setUserOrder([...userOrder, { shipping, cep }]);
    navigate(`/checkout`);
  };

  const handlePromo = (promo) => {
    if (promo === 'PROMO') {
      setUserOrder([...userOrder, { promo: 'PROMO' }]);
    }
  };

  return (
    <main>
      <h2>Carrinho</h2>
      <div className="cart-grid">
        <div>
          <div>
            <h4>Selecione o seu endereço</h4>

            <InputAdd
              button="buscar"
              onClick={handleCEP}
              name="CEP"
              type="text"
              placeholder="Item category"
              setValue={setCepNumber}
              value={cepNumber}
              onChange={(e) => setCepNumber(e.target.value)}
            />
          </div>
          {/*  */}
          <div>
            <h4>Endereço</h4>
            <p>
              <b>Rua: </b>
              {cep?.logradouro || ''}
            </p>
            <p>
              <b>Bairro: </b>
              {cep?.bairro || ''}
            </p>
            <p>
              <b>Cidade: </b>
              {cep?.localidade || ''}
            </p>
            <p>
              <b>UF: </b>
              {cep?.uf || ''}
            </p>
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
                  <InputRadio
                    name="shipping"
                    value="FEDEX"
                    id="fedex"
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>
                <li>
                  <InputRadio
                    name="shipping"
                    value="Azul"
                    id="azul"
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  <div>*****</div>
                  <div>R$0.00</div>
                </li>

                <li>
                  <InputRadio
                    name="shipping"
                    value="SEDEX"
                    id="sedex"
                    onChange={(e) => setShipping(e.target.value)}
                  />
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
              onChange={(e) => setPromo(e.target.value)}
              onClick={() => handlePromo(promo)}
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
              onClick={handleNext}
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
