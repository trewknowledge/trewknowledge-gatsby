import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Navigation from './Navigation'

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4e8c2;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => (props.menuOpen ? '5' : '-1')};
  pointer-events: ${props => (props.menuOpen ? 'auto' : 'none')};
  transition: all 0.3s ease;
`

const MobileMenu = ({menuOpen}) => {
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

  return(
    <MainMenu className="nav-wrapper" menuOpen={menuOpen}>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-4 large-order-2">
            <Navigation data={data} />
          </div>
          <div className="cell large-auto large-order-1">
            <ul className="nav-menu-social">
              <li><a href="https://twitter.com/trewknowledge" target="_blank">Twitter</a></li>
              <li><a href="https://www.facebook.com/trewknowledge" target="_blank">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/1022792" target="_blank">Linkedin</a></li>
              <li><a href="https://www.instagram.com/trewknowledge/" target="_blank">Instagram</a></li>
            </ul>
            <div className="nav-menu-details">
              
            </div>
          </div>
        </div>
      </div>
    </MainMenu>
  )
}

export default MobileMenu;
