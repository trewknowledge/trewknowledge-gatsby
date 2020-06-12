import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import tkLogo from '../images/logo-main.svg'
import MainMenu from './MainMenu';

const Header = ({ menuOpen, handleMenu, pageTitle, navStuck }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
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
    <header className={menuOpen ? "header is-open" : "header"}>
      <div className="grid-container header-wrapper">
        <div className={navStuck ? "nav-logo is-stuck" : "nav-logo"}>
          <Link to={"/"}>
            <img src={tkLogo} alt="Trew Knowledge Logo"/>
          </Link>
          <span>{pageTitle}</span>
        </div>
        <button className="hamburger-button" onClick={handleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
      <MainMenu menuOpen={menuOpen} handleMenu={handleMenu}/>
    </header>
  )
}

export default Header
