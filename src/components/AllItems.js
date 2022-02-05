import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { UserContext } from '../context/UserContext';
import Input from './form/Input';
import InputFile from './form/InputFile';

function AllItems() {
  const { setItems, items } = useContext(UserContext);

  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [price, setPrice] = useState('');
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (window.confirm(`Do you want to delete te movie ${id} permanently?`)) {
        await api.deleteItem(id);
        const response = await api.allItems();
        setItems(response.data.data);
      }
    } catch (err) {
      setError(err);
    }
  };

  const doUpdate = async (e) => {
    e.preventDefault();
    const payload = { id, name, price, poster };

    try {
      await api.updateItem(id, payload).then(async (res) => {
        const response = await api.allItems();
        setItems(response.data.data);
        setUpdating(false);
        setMessage(`Item updated`);
        setTimeout(() => setMessage(''), 3000);
      });
    } catch (err) {
      setError(err);
    }
  };

  const handleSelect = (item) => {
    setId(item._id);
    setName(item.name);
    setPrice(item.price);
    setPoster(item.poster);
    setUpdating(!updating);
  };

  const handleBuy = () => {
    console.log(`object`);
  };

  useEffect(() => {
    (async () => {
      const response = await api.allItems();
      setItems(response.data.data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>All Items</h1>
      {error && <p>Error:::</p>}
      {message && <p className="message message-success">{message}</p>}

      {updating && (
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
          {/* {errors.length > 0 &&
          errors.map((error, i) =>
            error.map((e, i) => <p key={i}>{e.message}</p>)
          )} */}
        </form>
      )}

      <div className="list">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div className="list-row" key={i}>
              <div>#{i + 1}</div>
              <Link to={`/item/${item._id}`}>
                <div>{item.name}</div>
              </Link>
              <div>{item.price}</div>
              <div>{item.poster}</div>
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
      </div>
    </main>
  );
}

export default AllItems;
