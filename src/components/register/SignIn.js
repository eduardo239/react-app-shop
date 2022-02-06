import Input from '../form/Input';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Message from '../elements/Message';

function SignIn() {
  const { setUser, user } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();

  const doSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) setUser(response.user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  React.useEffect(() => {
    if (user) {
      return navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main>
      <section className="sign-wrapper">
        <main className="sign">
          <form onSubmit={doSubmit}>
            <div>
              <h2>Entrar</h2>
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
                name="E-mail"
                type="email"
                placeholder="Digite o seu e-mail aqui ..."
                setValue={setEmail}
                value={email}
              />
              <Input
                name="Senha"
                type="password"
                placeholder="Digite a sua senha aqui ..."
                setValue={setPassword}
                value={password}
              />

              <button className="btn btn-primary btn-full mb-3">
                Entrar com e-mail
              </button>

              {error && <Message type="danger" message={error}></Message>}
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default SignIn;
