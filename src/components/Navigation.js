import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  display: none;

  @media( min-width: 767px ) {
    display: flex;
  }
`

const MenuItem = styled(Link)`
  color: #fff;
  display: block;
  padding: 8px 32px 8px 0;
`

const Navigation = ({ data }) => {
  const { url } = data.wpgraphql.generalSettings; 
  const menuItems = data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, "")
  }));

  return (
    <NavigationWrapper>
      {menuItems.map(item => (
        <MenuItem to={item.url} key={item.id}>
          {item.label}
        </MenuItem>
      ))}
    </NavigationWrapper>
  ) 
}

export default Navigation
