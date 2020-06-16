import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import tkLogo from '../images/logo-main.svg'
import MainMenu from './MainMenu';
import HeroCareers from './header-content/HeroCareers'
import HeroPositionSingle from './header-content/HeroPositionSingle'
import HeroPositions from './header-content/HeroPositions'
import HeroAbout from './header-content/HeroAbout'

const Header = ({ 
  menuOpen, 
  handleMenu, 
  pageTitle, 
  headerStyle, 
  headerContent,
  pageRef,
  navStuck 
}) => {
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
    if (headerStyle === 'blue') {
      setHeaderColor('hero-bg-light')
    } 
    if (headerStyle === 'white') {
      setHeaderColor('hero-bg-white')
    } 
    if (headerStyle === 'empty') {
      setHeaderColor('hero-empty')
    }
  }, [])

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
      <div className="grid-container-narrow">
        {pageRef === "About" ? <HeroAbout/> : null}
        {pageRef === "Careers" ? <HeroCareers/> : null}
        {pageRef === "positionsArchive" ? <HeroPositions/> : null}
        {pageRef === "WPGraphQL_Tk_position" ? <HeroPositionSingle headerContent={headerContent} /> : null}
      </div>
    </header>
  )
}

export default Header
