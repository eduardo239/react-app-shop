import { useState } from 'react';
import apis from '../../api';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';
import InputFile from '../form/InputFile';
import Textarea from '../form/Textarea';
import poster_default from '../../assets/poster_default.jpg';
import Message from '../elements/Message';

function NewItem() {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState(poster_default);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  // const [specs, setSpecs] = useState(''); TODO: add specs
  const [error, setError] = useState(null);
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
                  placeholder="Descrição do produto"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <Textarea
                  name="Informações"
                  placeholder="Informações do produto"
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
                  onClick={handleAddCategory}
                  name="Categoria"
                  type="text"
                  placeholder="Item category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
                <InputFile
                  name="Poster"
                  type="file"
                  placeholder="File Upload"
                />
                <button className="btn btn-primary">Adicionar novo item</button>

                {error && <Message type="danger" message={error}></Message>}
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

          <h4>Categorias</h4>
          <ul className="categories">
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
        </div>
      </div>
    </main>
  );
}

export default NewItem;
