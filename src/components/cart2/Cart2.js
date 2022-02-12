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
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [error, setError] = useState(null);

  const handleChangeQuantity = (e, index) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value);
      cartItems[index].item.quantity = e.target.value;
      setCart(cartItems);
    } else {
      setError('Erro na quantidade');
    }
  };

  const fetchZipCode = async (zipCode) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();
      setAddress(data);
      console.log(data);

      if (data?.error) {
        setError('CEP não encontrado');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleCepChange = async (e) => {
    setZipCode(e.target.value);
    if (zipCode.length > 6) {
      fetchZipCode(zipCode);
    }
  };

  return (
    <main>
      <h2>Carrinho</h2>

      {/* TODO: set Error */}
      <main>
        <section>
          <div>
            <h4>Selecione o seu endereço</h4>

            <InputAdd
              button="buscar"
              onChange={handleCepChange}
              name="CEP"
              type="text"
              placeholder="CEP do local de entrega"
              value={zipCode}
            />
          </div>
        </section>

        <section>
          <h4>Endereço</h4>

          {address ? (
            <div className="address-wrapper">
              <ul className="address-list">
                <li>
                  <span>Rua: {address.logradouro}</span>
                </li>
                <li>
                  <span>CEP: {address.cep}</span>
                </li>
                <li>
                  <span>Cidade: {address.localidade}</span>
                </li>
                <li>
                  <span>UF: {address.uf}</span>
                </li>
                <li>
                  <span>Bairro: {address.bairro}</span>
                </li>
              </ul>
              <div>
                <Input
                  name="Número"
                  type="number"
                  placeholder="Número do local de entrega"
                  setValue={setNumber}
                  value={number}
                />
                <Input
                  name="Complemento"
                  type="text"
                  placeholder="Número do local de entrega"
                  setValue={setAddressDetails}
                  value={addressDetails}
                />
              </div>
            </div>
          ) : (
            <p className="message message-info">Nenhum endereço selectionado</p>
          )}
        </section>
        <hr />
        <h4>Quantidade</h4>
        <section>
          {cartItems.length > 0 &&
            cartItems.map(({ item }, index) => (
              <div className="cart-wrapper" key={index}>
                <h4>{item.name}</h4>

                <ul className="cart-list">
                  <li>
                    <Input
                      name="Quantidade"
                      type="number"
                      placeholder="Quantidade de itens"
                      onChange={(e) => handleChangeQuantity(e, index)}
                      value={item.quantity}
                    />
                    <div>
                      <span>R${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </section>

        <div className="cart-buttons">
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
