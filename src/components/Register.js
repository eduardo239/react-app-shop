import Input from './form/Input';
import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const doSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
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
      <h1>Sign Up</h1>
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
        <Input
          name="Password Again"
          type="password"
          placeholder="User pass again"
          setValue={setPassword2}
          value={password2}
        />

        <button className="btn btn-primary" type="submit">
          register ..
        </button>
        {error && <p>{error}</p>}
      </form>
      {email}
      <br />
      {password}
    </main>
  );
}

export default Register;
