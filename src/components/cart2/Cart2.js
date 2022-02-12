import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import poster_default from '../../assets/poster_default_1_4.jpg';
import InputAdd from '../form/InputAdd';
import Input from '../form/Input';
import useLocalStorage from '../../hooks/useLocalStorage';
import Message from '../elements/Message';

function Cart2() {
  let navigate = useNavigate();

  const { cartItems, address, setAddress } = useContext(UserContext);
  const [cart, setCart] = useLocalStorage('cart', []);
  const [quantity, setQuantity] = useState(0);
  const [zipCode, setZipCode] = useState('');
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

  const fetchZipCode = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress({ ...address, local: null });
      } else {
        setAddress({ ...address, local: data });

        cartItems.address = address;
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleAddressClick = (e) => {
    e.preventDefault();
    setError(null);
    fetchZipCode(address.zipCode);
  };

  return (
    <main>
      <h2>Carrinho</h2>
      <main>
        <form>
          <section>
            <div>
              <h4>Selecione o seu endereço</h4>

              <InputAdd
                button="buscar"
                onChange={(e) => setZipCode(e.target.value)}
                name="CEP"
                type="text"
                placeholder="CEP do local de entrega"
                value={zipCode}
                onClick={handleAddressClick}
              />
            </div>
            {error && <Message type="danger" message={error} />}
          </section>

          <section>
            <h4>Endereço</h4>

            {address?.local ? (
              <div className="address-wrapper">
                <ul className="address-list">
                  <li>
                    <span>Rua: {address.local.logradouro}</span>
                  </li>
                  <li>
                    <span>CEP: {address.local.cep}</span>
                  </li>
                  <li>
                    <span>Cidade: {address.local.localidade}</span>
                  </li>
                  <li>
                    <span>UF: {address.local.uf}</span>
                  </li>
                  <li>
                    <span>Bairro: {address.local.bairro}</span>
                  </li>
                </ul>
                <div>
                  <Input
                    name="Número"
                    type="text"
                    placeholder="Número do local de entrega"
                    onChange={(e) =>
                      setAddress({ ...address, number: e.target.value })
                    }
                    value={address.number}
                  />
                  <Input
                    name="Complemento"
                    type="text"
                    placeholder="Número do local de entrega"
                    onChange={(e) =>
                      setAddress({ ...address, details: e.target.value })
                    }
                    value={address.details}
                  />
                </div>
              </div>
            ) : (
              <p className="message message-info">
                Nenhum endereço selectionado
              </p>
            )}
          </section>
        </form>
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
