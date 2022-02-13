import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function StorageSelect({ item, setStorage }) {
  return (
    <div className="card-configuration-colors">
      <span>Cores</span>
      <div className="flex">
        {item.storages.map((storage) => (
          <div
            key={storage}
            style={{ backgroundColor: storage }}
            className={`color-select bg--${storage}`}
            onClick={() => setStorage(storage)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default StorageSelect;
