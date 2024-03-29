import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navigation from './Navigation'

const MobileMenu = ({menuOpen, handleMenu}) => {
  const data = useStaticQuery(graphql`
    query MobileMenuQuery {
      allWpMenu(filter: {slug: {eq: "main-menu"}}) {
        nodes {
          menuItems {
            nodes {
              label
              id
              path
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
          <div className="cell large-auto large-order-1 nav-menu-secondary-section">
            <ul className="menu">
              <li><a href="https://twitter.com/trewknowledge" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.facebook.com/trewknowledge" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/1022792" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://www.instagram.com/trewknowledge/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
