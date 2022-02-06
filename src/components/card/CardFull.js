import poster_default from '../../assets/poster_default.jpg';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import shopApis from '../../api/shop';
import apis from '../../api';
import Message from '../elements/Message';

function CardFull({ item, button }) {
  const { id } = useParams();

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const { userId } = useContext(UserContext);

  const handleBuy = async () => {
    const payload = {
      userId,
      item: {
        _id: item._id,
        name: item.name,
        price: item.price
      }
    };

    try {
      await shopApis.addItemOrder(payload).then(async (res) => {
        setMessage(`Item added`);
        setTimeout(() => setMessage(''), 3000);
      });
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div className="product">
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
        {/* <hr />

            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, doloremque quia quisquam.
            </p> */}
        <hr />
        <div className="flex">
          <div className="flex-1">
            <span>Cores</span>
            <div className="flex">
              <div className="color-select color-red"></div>
              <div className="color-select color-blue"></div>
            </div>
          </div>
          <div className="flex-1">
            <span>Armazenamento</span>
            <div className="flex">
              <div className="color-select color-red"></div>
              <div className="color-select color-blue"></div>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex-1">
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
        <button className="btn btn-primary btn-full" onClick={handleBuy}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default CardFull;
