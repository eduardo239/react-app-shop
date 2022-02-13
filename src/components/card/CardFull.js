import poster_default from '../../assets/poster_default.jpg';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Input from '../form/Input';
import Message from '../elements/Message';

function CardFull({ item, button }) {
  const { cartItems, setCartItems } = useContext(UserContext);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [storage, setStorage] = useState(null);
  const [error, setError] = useState(false);

  const handleAddItem = (e) => {
    e.preventDefault();
    setError(false);
    if (!color && !storage) {
      setError('Selecione uma cor e um tamanho');
      setTimeout(() => setError(false), 3000);
      return;
    } else {
      const payload = {
        item: {
          _id: item._id,
          name: item.name,
          price: item.price,
          info: item.info,
          createdAt: new Date(),
          color: color,
          storage: storage,
          quantity: 1
        },
        services: {
          _id: null,
          name: '',
          time: 0
        }
      };
      setCartItems([...cartItems, payload]);
    }
  };

  return (
    <div className="product">
      {error && <Message absolute type="danger" message={error}></Message>}

      <div className="product-item">
        <img
          className="product-img"
          src={item.poster ? item.poster : poster_default}
          alt={item.name}
        />
      </div>

      <div className="product-info">
        <h3>Title</h3>

        <small>{item.description}</small>

        <hr />

        <div className="card-configuration">
          <div className="card-configuration-colors">
            <span>Cores</span>
            <div className="flex">
              <div
                className="color-select color-red"
                onClick={() => setColor('red')}
              ></div>
              <div
                className="color-select color-blue"
                onClick={() => setColor('blue')}
              ></div>
            </div>
          </div>
          <div className="card-configuration-storage">
            <span>Armazenamento</span>
            <div className="flex">
              <div
                className="color-select color-red"
                onClick={() => setStorage('64GB')}
              ></div>
              <div
                className="color-select color-blue"
                onClick={() => setStorage('128GB')}
              ></div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <Input
            name="Quantidade"
            type="number"
            placeholder="Quantidade de itens"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <hr />
        <div className="card-price">
          <p className=" small opacity-20 line-through mb-3">R${item.price}</p>
          <p>
            R${item.price} em até 12x de R${(item.price / 12).toFixed(2)}
          </p>
          <p>
            ou <b>{(item.price - item.price / 10).toFixed(2)}</b> à vista com
            10% de desconto
          </p>
          <p>
            <small>Formas de pagamento</small>
          </p>
        </div>
        <button className="btn btn-primary btn-full" onClick={handleAddItem}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default CardFull;
