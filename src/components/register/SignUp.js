import Input from '../form/Input';
import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import userApis from '../../api/user';
import Message from '../elements/Message';
const avatar = 'http://www.gravatar.com/avatar  ';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const doSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const uid = user.user.uid;

      const payload = {
        username,
        avatar,
        uid,
        wallet: {
          value: 0
        }
      };

      try {
        await userApis.addNewUser(payload);
      } catch (err) {
        // TODO: check
        setError(err.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  React.useEffect(() => {
    if (user) {
      return navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main>
      <section className="sign-wrapper">
        <main className="sign">
          <form onSubmit={doSubmit}>
            <div>
              <h2>Registrar</h2>
              <p>
                <small>
                  Recomendamos usar o endereço de e-mail que você usa no
                  trabalho.
                </small>
              </p>
            </div>
            <hr />
            {/*  */}
            <div>
              <Input
                name="Username"
                type="username"
                placeholder="Digite um apelido ..."
                setValue={setUsername}
                value={username}
              />
              <Input
                name="E-mail"
                type="text"
                placeholder="Digite o seu e-mail aqui ..."
                setValue={setEmail}
                value={email}
              />
              <Input
                name="Senha"
                type="password"
                placeholder="Digite sua senha aqui ..."
                setValue={setPassword}
                value={password}
              />
              <Input
                name="Senha novamente"
                type="password"
                placeholder="Confirme sua senha aqui ..."
                setValue={setPassword2}
                value={password2}
              />

              <button className="btn btn-primary btn-full mb-3" type="submit">
                Registrar
              </button>

              {error && <Message type="danger" message={error}></Message>}
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default SignUp;
