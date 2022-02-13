import { useState } from 'react';
import apis from '../../api';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';
import InputFile from '../form/InputFile';
import Textarea from '../form/Textarea';
import poster_default from '../../assets/poster_default.jpg';
import Message from '../elements/Message';

const poster_crimson = 'https://iili.io/08vi2R.png';
const poster_gold = 'https://iili.io/08v6rv.png';
const poster_silver = 'https://iili.io/08vs7p.png';

function NewItem() {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState(poster_default);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState('');
  const [storages, setStorages] = useState([]);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState([]);

  const doSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const payload = {
        name,
        poster,
        price,
        description,
        info,
        categories,
        colors,
        storages
      };
      await apis.insertItem(payload);
    } catch (error) {
      const y = error.response?.data?.err?.errors;
      const r = Object.keys(y).map((key) => [key, y[key]]);
      setErrors(r);
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (category) {
      setCategories([...categories, category]);
      setCategory('');
    } else {
      setError('Preencha o campo de categoria');
      setTimeout(() => setError(false), 3000);
    }
  };
  const removeFromCategories = (e, i) => {
    e.preventDefault();
    const newCategories = [...categories];
    newCategories.splice(i, 1);
    setCategories(newCategories);
  };

  const handleAddStorage = (e) => {
    e.preventDefault();
    if (storage) {
      setStorages([...storages, storage]);
      setStorage('');
    } else {
      setError('Preencha o campo de armazenamento');
      setTimeout(() => setError(false), 3000);
    }
  };
  const removeFromStorages = (e, i) => {
    e.preventDefault();
    const newStorages = [...storages];
    newStorages.splice(i, 1);
    setStorages(newStorages);
  };

  const handleAddColor = (e) => {
    e.preventDefault();
    if (color) {
      setColors([...colors, color]);
      setColor('');
    } else {
      setError('Preencha o campo de cor');
      setTimeout(() => setError(false), 3000);
    }
  };
  const removeFromColors = (e, i) => {
    e.preventDefault();
    const newColors = [...colors];
    newColors.splice(i, 1);
    setColors(newColors);
  };

  return (
    <main>
      <div className="flex flex-center">
        <section className="sign-wrapper" style={{ margin: 0 }}>
          <main className="sign">
            <form onSubmit={doSubmit}>
              <div>
                <h2>Inserir um produto</h2>
                <p>
                  <small>Recomendamos detalhar o produto.</small>
                </p>
              </div>
              <hr />
              {/*  */}
              <div>
                <Input
                  name="Nome"
                  type="text"
                  placeholder="Nome do produto"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <Textarea
                  name="Description"
                  placeholder="Descrição do produto, ex: Apresentação"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <Textarea
                  name="Informações"
                  placeholder="Informações do produto, ex: Tamanho, Cor, etc."
                  onChange={(e) => setInfo(e.target.value)}
                  value={info}
                />
                <Input
                  name="Preço"
                  type="number"
                  placeholder="Preço do produto"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
                <InputAdd
                  button="Adicionar"
                  onClick={handleAddColor}
                  name="Cor"
                  type="text"
                  placeholder="Cores do produto"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                />

                <InputAdd
                  button="Adicionar"
                  onClick={handleAddStorage}
                  name="Armazenamento"
                  type="text"
                  placeholder="Somente números, em GB"
                  onChange={(e) => setStorage(e.target.value)}
                  value={storage}
                />

                <InputAdd
                  button="Adicionar"
                  onClick={handleAddCategory}
                  name="Categoria"
                  type="text"
                  placeholder="Em qual categoria o produto se encontrar?"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
                <InputFile
                  name="Poster"
                  type="file"
                  placeholder="File Upload"
                />
                <button className="btn btn-primary">Adicionar novo item</button>

                {error && (
                  <Message absolute type="danger" message={error}></Message>
                )}
              </div>
            </form>
          </main>
        </section>
        {/*  */}
        <div className="new-item-results">
          <h2>Inserir um produto</h2>
          <p>
            <small>Resultado parcial.</small>
          </p>

          <hr />

          <h4>Nome</h4>
          <p>
            <small>{name}</small>
          </p>

          <hr />

          <h4>Descrição</h4>
          <p>
            <small>{description}</small>
          </p>

          <hr />

          <h4>Informação</h4>
          <p>
            <small>{info}</small>
          </p>

          <hr />

          <h4>Preço</h4>
          <p>
            <small>{price}</small>
          </p>
          <hr />

          <h4>Cores</h4>
          <ul className="items-remove">
            {colors.length > 0 ? (
              colors.map((c, i) => (
                <button
                  onClick={(e) => removeFromColors(e, i)}
                  className="btn btn-primary"
                  key={i}
                >
                  {c}
                </button>
              ))
            ) : (
              <Message
                type="danger"
                message="Nenhuma cor foi encontrada"
              ></Message>
            )}
          </ul>
          <hr />
          <h4>Armazenamento</h4>
          <ul className="items-remove">
            {storages.length > 0 ? (
              storages.map((c, i) => (
                <button
                  onClick={(e) => removeFromStorages(e, i)}
                  className="btn btn-primary"
                  key={i}
                >
                  {c}
                </button>
              ))
            ) : (
              <Message
                type="danger"
                message="Nenhumo armazenamento foi encontrado"
              ></Message>
            )}
          </ul>
          <hr />
          <h4>Categorias</h4>
          <ul className="items-remove">
            {categories.length > 0 ? (
              categories.map((c, i) => (
                <button
                  onClick={(e) => removeFromCategories(e, i)}
                  className="btn btn-primary"
                  key={i}
                >
                  {c}
                </button>
              ))
            ) : (
              <Message
                type="danger"
                message="Nenhuma categoria foi encontrada"
              ></Message>
            )}
          </ul>
          <hr />
          <h4>Imagens</h4>
          <img src={poster_crimson} alt="" />
        </div>
      </div>
    </main>
  );
}

export default NewItem;
