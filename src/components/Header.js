import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import tkLogo from '../images/logo-main.svg'
import MainMenu from './MainMenu';

const Header = ({ menuOpen, handleMenu, pageTitle, pageType, navStuck }) => {
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

  const [headerColor, setHeaderColor] = useState('hero-bg-dark');

  useEffect(() => {
    if (pageTitle === 'Careers') {
      setHeaderColor('hero-bg-light')
    } else if (pageType === 'Post') {
      setHeaderColor('hero-empty')
    } else {
      setHeaderColor('hero-bg-dark')
    }
  }, pageTitle)

  return(
    <header className={headerColor}>
      <nav className={menuOpen ? "grid-container nav is-open" : "grid-container nav"}>
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
      </nav>
      <MainMenu menuOpen={menuOpen} handleMenu={handleMenu}/>
      <div className="grid-container-narrow"></div>
    </header>
  )
}

export default Header
