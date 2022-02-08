import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';

function Card({ item, button }) {
  let navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <img
          className="card-img"
          src={item.poster ? item.poster : poster_default}
          alt={item.name}
        />
        <p>
          <small>{item.dsecription}</small>
        </p>
      </div>
      <div className="card-body">
        <p>
          <b>{item.name}</b>
        </p>
        <p>{item.info}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-full"
          onClick={() => navigate(`/item/${item._id}`)}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Card;
