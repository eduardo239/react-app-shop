import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userApis from '../../api/user';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      if (
        window.confirm(`Do you want to delete this user ${id} permanently?`)
      ) {
        await userApis.deleteUser(id);
        const response = await userApis.allItems();
        setUsers(response.data.data);
      }
    } catch (err) {
      setError(err);
    }
  };
  const handleSelect = () => {};

  useEffect(() => {
    (async () => {
      const response = await userApis.allUsers();
      setUsers(response.data.data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>Users</h1>
      {error && <p>Error:::</p>}

      <div className="list">
        {users.length > 0 ? (
          users.map((user, i) => (
            <div className="list-row" key={i}>
              <div>#{i + 1}</div>
              <Link to={`/user/${user._id}`}>
                <div>{user._id}</div>
              </Link>
              <div className="flex">
                <button
                  className="btn btn-secondary"
                  onClick={(e) => handleDelete(e, user._id)}
                >
                  FIX DEL
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => handleSelect(user)}
                >
                  UPD
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Users not found</p>
        )}
      </div>
    </main>
  );
}

export default Users;
