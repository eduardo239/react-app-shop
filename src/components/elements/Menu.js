import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Menu() {
  const { user, setUser } = useContext(UserContext);

  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        window.localStorage.removeItem('userId');
      });
  };

  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new-item">New Item</Link>
      </li>
      <li>
        <Link to="/users">All Users</Link>
      </li>
      <li>
        <Link to="/new-item">New Item</Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
      {user && (
        <li>
          <Link to={`/user/${user.email}`}>{user.email}</Link>
        </li>
      )}
      <li>
        {user && (
          <button className="btn-link" onClick={logout}>
            sign out
          </button>
        )}
      </li>
    </ul>
  );
}

export default Menu;
