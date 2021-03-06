import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { UserContext } from '../../context/UserContext';
// import Input from '../form/Input';
// import InputFile from '../form/InputFile';
import Card from '../card/Card';
import CardFull from '../card/CardFull';
import Message from '../elements/Message';

function AllItems() {
  const { setItems, items } = useContext(UserContext);

  // const [id, setId] = useState(null);
  // const [error, setError] = useState(null);
  // const [name, setName] = useState('');
  // const [poster, setPoster] = useState('');
  // const [price, setPrice] = useState('');
  // const [updating, setUpdating] = useState(false);
  // const [message, setMessage] = useState('');

  // const handleDelete = async (e, id) => {
  //   e.preventDefault();
  //   try {
  //     if (window.confirm(`Do you want to delete te movie ${id} permanently?`)) {
  //       await api.deleteItem(id);
  //       const response = await api.allItems();
  //       setItems(response.data.data);
  //     }
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

  // const doUpdate = async (e) => {
  //   e.preventDefault();
  //   const payload = { id, name, price, poster };

  //   try {
  //     await api.updateItem(id, payload).then(async (res) => {
  //       const response = await api.allItems();
  //       setItems(response.data.data);
  //       setUpdating(false);
  //       setMessage(`Item updated`);
  //       setTimeout(() => setMessage(''), 3000);
  //     });
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

  // const handleSelect = (item) => {
  //   setId(item._id);
  //   setName(item.name);
  //   setPrice(item.price);
  //   setPoster(item.poster);
  //   setUpdating(!updating);
  // };

  useEffect(() => {
    (async () => {
      const response = await api.allItems();
      setItems(response.data.data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h3>
        SMARTPHONES MOTOROLA EM <span className="primary">OFERTA</span>
      </h3>

      <section className="card-wrapper">
        {items.length > 0 ? (
          items
            .map(
              (item) =>
                item && <Card key={item._id} item={item} button="Comprar" />
            )
            .slice(-4)
            .reverse()
        ) : (
          <Message type="info" message="Nenhum item foi encontrado"></Message>
        )}
      </section>

      <hr className="mx-5" />

      <h3>
        SMARTPHONES MOTOROLA EM <span className="primary">OFERTA</span>
      </h3>

      <section>
        {items.length > 0 ? (
          items
            .slice(-1)
            .map(
              (item) =>
                item && <CardFull key={item._id} item={item} button="comprar" />
            )
        ) : (
          <Message type="info" message="Nenhum item foi encontrado"></Message>
        )}
      </section>

      <hr className="mx-5" />

      <section>
        <h3>
          NAVEGUE POR <span className="primary">CATEGORIA</span>
        </h3>

        <div className="category">
          <div>Bateria</div>
          <div>C??mera</div>
          <div>Pre??o</div>
          <div>Conectividade</div>
          <div>Mem??ria</div>
          <div>Jogar</div>
        </div>
      </section>

      <hr className="mx-5" />

      <section>
        <footer>foo</footer>
      </section>
      {/* {error && <p>Error:::</p>}
      {message && <p className="message message-success">{message}</p>} */}

      {/* {updating && (
        <form onSubmit={doUpdate}>
          <Input
            name="Name"
            type="text"
            placeholder="name"
            setValue={setName}
            value={name}
          />
          <Input
            name="Price"
            type="number"
            placeholder="Item price"
            setValue={setPrice}
            value={price}
          />
          <Input
            name="Category"
            type="text"
            placeholder="Item category"
            setValue={setPoster}
            value={poster}
          />
          <InputFile name="Poster" type="file" placeholder="File Upload" />
          <button className="btn btn-primary">click here to insert ...</button>

        </form>
      )} */}

      {/* <div className="feature-items">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-item-image">
                <img
                  src={item?.poster ? item.poster : poster_default}
                  alt={item.name}
                />
                <button
                  className="btn btn-secondary btn-absolute-bottom"
                  onClick={() => navigate(`/item/${item._id}`)}
                >
                  comprar
                </button>
              </div>
              <div className="feature-info">
                <h5>{item.name}</h5>
                <p>mais cores</p>
                <p
                  className="opacity-40"
                  style={{ textDecoration: 'line-through' }}
                >
                  {item.price}
                </p>
                <p>{(item.price - item.price / 10).toFixed(2)} ?? vista</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items</p>
        )}
      </div> */}

      {/* <div className="list">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div key={i}>
              <div>#{i + 1}</div>
              <Link to={`/item/${item._id}`}>
                <div>{item.name}</div>
              </Link>
              <div>{item.price}</div>
              <div className="flex">
                <button className="btn btn-secondary" onClick={handleBuy}>
                  buy
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => handleDelete(e, item._id)}
                >
                  DEL
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => handleSelect(item)}
                >
                  UPD
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Items not found</p>
        )}
      </div> */}
    </main>
  );
}

export default AllItems;
