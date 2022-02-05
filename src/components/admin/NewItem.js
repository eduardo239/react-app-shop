import { useState } from 'react';
import apis from '../../api';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';
import InputFile from '../form/InputFile';
import Textarea from '../form/Textarea';
import poster_default from '../../assets/poster_default.jpg';

function NewItem() {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState(poster_default);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  // const [specs, setSpecs] = useState(''); TODO: add specs

  const [errors, setErrors] = useState([]);

  const doSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const payload = { name, poster, price, description, info, categories };
      await apis.insertItem(payload);
    } catch (error) {
      const y = error.response?.data?.err?.errors;
      const r = Object.keys(y).map((key) => [key, y[key]]);
      setErrors(r);
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    setCategories([...categories, category]);
    setCategory('');
  };

  const removeFromCategories = (e, i) => {
    e.preventDefault();
    const newCategories = [...categories];
    newCategories.splice(i, 1);
    setCategories(newCategories);
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
        <Textarea
          name="Description"
          placeholder="name"
          setValue={setDescription}
          value={description}
        />
        <Textarea
          name="Info"
          placeholder="info"
          setValue={setInfo}
          value={info}
        />
        <Input
          name="Price"
          type="number"
          placeholder="Item price"
          setValue={setPrice}
          value={price}
        />
        <InputAdd
          onClick={handleAddCategory}
          name="Category"
          type="text"
          placeholder="Item category"
          setValue={setCategory}
          value={category}
        />
        <InputFile name="Poster" type="file" placeholder="File Upload" />
        <button className="btn btn-primary">click here to add ...</button>
        {errors.length > 0 &&
          errors.map((error, i) =>
            error.map((e, i) => <p key={i}>{e.message}</p>)
          )}
      </form>

      <section>
        <h2>name</h2>
        <p>{name}</p>
        <h2>description</h2>
        <p>{description}</p>
        <h2>info</h2>
        <p>{info}</p>
        <h2>price</h2>
        <p>R$ {price}</p>
        <h2>categories</h2>
        <ul className="categories">
          {categories.length > 0 ? (
            categories.map((c, i) => (
              <li
                onClick={(e) => removeFromCategories(e, i)}
                className="category"
                key={i}
              >
                {c}
              </li>
            ))
          ) : (
            <p>no categories</p>
          )}
        </ul>
        <h2>poster</h2>
        <img src={poster_default} alt="" className="poster" />
      </section>
    </main>
  );
}

export default NewItem;
