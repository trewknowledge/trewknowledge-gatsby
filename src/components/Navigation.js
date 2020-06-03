import React from 'react';
import { Link } from 'gatsby';

const Navigation = ({ data, handleMenu }) => {
  const { url } = data.wpgraphql.generalSettings; 
  const menuItems = data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, "")
  }));

  return (
    <ul className="nav-menu">
      {menuItems.map(item => (
        <Link className="nav-menu__item" to={item.url} key={item.id} onClick={handleMenu}>
          {item.label}
        </Link>
      ))}
    </ul>
  ) 
}

export default Navigation
