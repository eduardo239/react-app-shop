import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function ColorSelect({ item, setColor }) {
  return (
    <div className="card-configuration-colors">
      <span>Cores</span>
      <div className="flex">
        {item.colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={`color-select bg--${color}`}
            onClick={() => setColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelect;
