import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import shopApis from '../../api/shop';

function User() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const { user, userId } = useContext(UserContext);
  const [orderItems, setOrderItems] = useState([]);

  const handleDelete = async (e, id) => {
    // FIXME: delete not working
    e.preventDefault();
    try {
      if (window.confirm(`Do you want to delete te movie ${id} permanently?`)) {
        await shopApis.deleteItemOrder(id);
        const response = await shopApis.getAllOrderItems(userId);
        setOrderItems(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (!user && !userId) {
      return navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      if (userId) {
        const response = await shopApis.getAllOrderItems(userId);
        if (isMounted) setOrderItems(response.data.data);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  return (
    <main>
      <h1>User ID</h1>

      <div className="list">
        {orderItems.length > 0 ? (
          orderItems.map((item, i) => (
            <div className="list-row" key={i}>
              <div>#{i + 1}</div>
              <Link to={`/item/${item.item._id}`}>
                <div>{item.item.name}</div>
              </Link>
              <div>{item.item.price}</div>
              <div>{item.item.poster}</div>
              <div className="flex">
                <button
                  className="btn btn-secondary"
                  onClick={(e) => handleDelete(e, item._id)}
                >
                  REM
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Orders not found</p>
        )}
      </div>
    </main>
  );
}

export default User;
