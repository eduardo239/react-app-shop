import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import shopApis from '../api/shop';
import apis from '../api';
import ShopInfo from './ShopInfo';
import ShopItemWrapper from './ShopItemWrapper';
import ShopPoster from './ShopPoster';

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
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

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (id) {
        const response = await apis.getItemById(id);
        if (isMounted) setItem(response.data.data);
      }
    })();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error && <p>Error!</p>}
      {message && <p className="message">{message}</p>}
      <ShopItemWrapper id={id}>
        <ShopPoster url={item?.poster} alt={item?.name} />
        <ShopInfo name={item?.name} price={item?.price} onClick={handleBuy} />
      </ShopItemWrapper>
    </>
  );
}

export default Item;
