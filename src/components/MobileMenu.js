import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const MenuItem = styled(Link)`
  color: #000;
  display: block;
  padding: 8px 16px;
`

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4e8c2;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  position: fixed;
  width: 30%;
  height: 100%;
  right: 0;
  transform: ${props => (props.menuOpen ? 'translateX(0%)' : 'translateX(100%)')};
  transition: all 0.3s ease;
`

const MobileMenu = ({menuOpen, handleMobileMenu}) => {
  const data = useStaticQuery(graphql`
    query MobileMenuQuery {
      wpgraphql {
        generalSettings {
          url
        }
        menus(where: {slug: "Main Menu"}) {
          nodes {
            menuItems {
              nodes {
                url
                label
                id
              }
            }
          }
        }
      }
    }
  `)

  const { url } = data.wpgraphql.generalSettings; 
  const menuItems = data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, "")
  }));

  return(
    <MobileMenuWrapper menuOpen={menuOpen} >
      <button onClick={handleMobileMenu}>Close Menu</button>
      {menuItems.map(item => (
        <MenuItem to={item.url} key={item.id}>
          {item.label}
        </MenuItem>
      ))}
    </MobileMenuWrapper>
  )
}

export default MobileMenu;
