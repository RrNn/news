import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Nav = () => {
  return (
    <nav>
      <div>
        <span className="Logo">
          <Link to="/">Headlines</Link>
        </span>
        <ul>
          <li className="nav-item">
            <Link to="/business">Business</Link>
          </li>

          <li className="nav-item">
            <Link to="/sports">Sports</Link>
          </li>

          <li className="nav-item">
            <Link to="/apple">Apple</Link>
          </li>

          <li className="nav-item">
            <Link to="/samsung">Samsung</Link>
          </li>

          <li className="nav-item">
            <Link to="/entertainment">Entertainment</Link>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default Nav;
