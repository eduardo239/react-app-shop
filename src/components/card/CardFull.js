import poster_default from '../../assets/poster_default.jpg';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Input from '../form/Input';
import Message from '../elements/Message';
import ColorSelect from '../elements/ColorSelect';
import StorageSelect from '../elements/StorageSelect';
import CardPrices from '../elements/CardPrices';

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

  const handleChange = (color) => {
    setColor(color);
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

        <div className="card-configurations">
          <ColorSelect item={item} handleChange={handleChange} />
          <StorageSelect item={item} setStorage={setStorage} />
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

        <CardPrices item={item} />

        <button className="btn btn-primary btn-full" onClick={handleAddItem}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default CardFull;
