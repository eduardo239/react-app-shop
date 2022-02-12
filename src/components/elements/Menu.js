import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Menu() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
        return navigate('/');
      });
  };

  // TODO: add userOrder to menu
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/new-item">New Item</Link>
          </li>

          <li>
            <Link to="/add-money">Add Money</Link>
          </li>
          <li>
            <Link to="/wallet">carteira</Link>
          </li>
          <li>
            <Link to="/cart-1">cart 1</Link>
          </li>
          <li>
            <Link to="/cart-2">cart 2</Link>
          </li>
          <li>
            <Link to="/cart-3">cart 3</Link>
          </li>

          <li>
            <Link to="/api">API</Link>
          </li>
          <li>
            <Link to="/design">Dsg</Link>
          </li>
        </>
      )}
      {user && (
        <li>
          <Link to={`/user/${user.email}`}>conta</Link>
        </li>
      )}
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
          <Link to="#" className="btn btn-link" onClick={logout}>
            logout
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Menu;
