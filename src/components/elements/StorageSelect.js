import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function StorageSelect({ item, setStorage }) {
  return (
    <section>
      <span>Cores</span>
      <div className="card-configuration">
        {item.storages.map((storage) => (
          <div
            key={storage}
            style={{ backgroundColor: storage }}
            className={`color-select bg--${storage}`}
            onClick={() => setStorage(storage)}
          >
            {storage}GB
          </div>
        ))}
      </div>
    </section>
  );
}

export default StorageSelect;
