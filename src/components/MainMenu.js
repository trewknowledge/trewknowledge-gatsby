import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Navigation from './Navigation'

const MobileMenu = ({menuOpen, handleMenu}) => {
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
    <div className={menuOpen ? "nav-wrapper is-open" : "nav-wrapper"}>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-4 large-order-2">
            <Navigation data={data} handleMenu={handleMenu} />
          </div>
          <div className="cell large-auto large-order-1 nav-menu-secondary">
            <ul className="nav-menu-social">
              <li><a href="https://twitter.com/trewknowledge" target="_blank">Twitter</a></li>
              <li><a href="https://www.facebook.com/trewknowledge" target="_blank">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/1022792" target="_blank">Linkedin</a></li>
              <li><a href="https://www.instagram.com/trewknowledge/" target="_blank">Instagram</a></li>
            </ul>
            <div className="nav-menu-details">
              <address>372 Richmond Street West, Suite 210
                <br/>
                Toronto, ON M5V 1X6
                <br />
                <a href="tel:1-647-289-6838">+1.647.289.6838</a>
              </address>
              <p className="nav-menu-contact">
                <a href="mailto:info@trewknowledge.com">info@trewknowledge.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
