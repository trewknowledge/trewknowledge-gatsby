import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import TkLogo from '../assets/img/svgs/logo-main.svg'

import MainMenu from './MainMenu';
import HeroCareers from './header-content/HeroCareers'
import HeroPositionSingle from './header-content/HeroPositionSingle'
import HeroPositions from './header-content/HeroPositions'
import HeroAbout from './header-content/HeroAbout'
import HeroHome from './header-content/HeroHome'
import HeroWpVip from './header-content/HeroWpVip'

const Header = ({ 
  menuOpen, 
  handleMenu, 
  pageTitle, 
  headerStyle, 
  headerContent,
  pageRef,
  navStuck 
}) => {

  const [headerColor, setHeaderColor] = useState('hero hero-bg-dark');

  useEffect(() => {
    if (headerStyle === 'blue') {
      setHeaderColor('hero hero-bg-light')
    } 
    if (headerStyle === 'white') {
      setHeaderColor('hero hero-bg-white')
    } 
    if (headerStyle === 'empty') {
      setHeaderColor('hero hero-empty')
    }
    if (headerStyle === 'contact') {
      setHeaderColor('hero hero-bg-contact')
    }
    if (headerStyle === 'black') {
      setHeaderColor('hero hero-bg-black')
    }
  }, [headerStyle])

  return(
    <header className={headerColor}>
      <nav className={menuOpen ? "grid-container nav is-open" : "grid-container nav"}>
        <div className={navStuck ? "nav-logo is-stuck" : "nav-logo"}>
          <Link to={"/"}>
            <TkLogo alt="Trew Knowledge Logo" />
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
        {pageRef === "Home" ? <HeroHome/> : null}
        {pageRef === "About" ? <HeroAbout/> : null}
        {pageRef === "Careers" ? <HeroCareers/> : null}
        {pageRef === "positionsArchive" ? <HeroPositions/> : null}
        {pageRef === "WPGraphQL_Tk_position" ? <HeroPositionSingle headerContent={headerContent} /> : null}
        {pageRef === "WordPress VIP" ? <HeroWpVip/> : null}
      </div>
    </header>
  )
}

export default Header
