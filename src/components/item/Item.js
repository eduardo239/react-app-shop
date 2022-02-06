import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apis from '../../api';
import CardFull from '../card/CardFull';

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  return <section>{item && <CardFull item={item} button="comprar" />}</section>;
}

export default Item;
