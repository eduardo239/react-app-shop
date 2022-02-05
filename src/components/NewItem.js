import { useState } from 'react';
import apis from '../api';
import Input from './form/Input';
import InputFile from './form/InputFile';

function NewItem() {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [price, setPrice] = useState('');

  const [errors, setErrors] = useState([]);

  const doSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const payload = { name, poster, price };
      await apis.insertItem(payload);
    } catch (error) {
      const y = error.response?.data?.err?.errors;
      const r = Object.keys(y).map((key) => [key, y[key]]);
      setErrors(r);
    }
  };

  return (
    <main>
      <h1>Add a new item</h1>
      <form onSubmit={doSubmit}>
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
        {errors.length > 0 &&
          errors.map((error, i) =>
            error.map((e, i) => <p key={i}>{e.message}</p>)
          )}
      </form>
    </main>
  );
}

export default NewItem;
