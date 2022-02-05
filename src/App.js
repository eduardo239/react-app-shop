import React, { useContext, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { UserContext } from './context/UserContext';
import Home from './components/Home';

function App() {
  const { setUser, setUserId } = useContext(UserContext);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) setUser(user);
        setUserId(uid);
        window.localStorage.setItem('userId', uid);
      } else {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch((err) => {
            console.error(err);
            setError(err.message);
          })
          .finally(() => {
            window.localStorage.removeItem('userId');
          });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Home />
      {error && <p>Error!</p>}
    </div>
  );
}

export default App;
