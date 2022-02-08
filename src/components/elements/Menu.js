import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Menu() {
  const { user, setUser, userOrder } = useContext(UserContext);
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
    <ul className="menu mb-3">
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
            <Link to="/pre-cart">
              carrinho <span className="ballon">{userOrder.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
          <li>
            <Link to="/finish">finish</Link>
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
          <button className="btn btn-link" onClick={logout}>
            logout
          </button>
        </li>
      )}
    </ul>
  );
}

export default Menu;
