import React from 'react';
import { Link } from 'gatsby';

const Navigation = ({ data, handleMenu }) => {
  const menuItems = data.allWpMenu.nodes[0].menuItems.nodes;

  return (
    <ul className="nav-menu">
      {menuItems.map(item => (
        <li className="nav-menu__item" key={item.id}>
          <Link to={item.path} onClick={handleMenu}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  ) 
}

export default Navigation
