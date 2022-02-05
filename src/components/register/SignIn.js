import Input from '../form/Input';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

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
      <h1>Login</h1>
      <form onSubmit={doSubmit}>
        <Input
          name="Email"
          type="email"
          placeholder="Email ..."
          setValue={setEmail}
          value={email}
        />
        <Input
          name="Password"
          type="password"
          placeholder="User pass"
          setValue={setPassword}
          value={password}
        />

        <button className="btn btn-primary">do login ..</button>

        {error && <p>{error}</p>}
      </form>
    </main>
  );
}

export default SignIn;
