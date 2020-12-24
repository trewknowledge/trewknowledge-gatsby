import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import TkLogo from '../assets/img/svgs/logo-main.svg'
import MainMenu from './MainMenu';

import headerContent from '../utils/headerContent';
import HeroDefault from './headerTemplates/HeroDefault';
import HeroPositionSingle from './headerTemplates/HeroPositionSingle';
import HeroWpVip from './headerTemplates/HeroWpVip';
import HeroSAP from './headerTemplates/HeroSAP';

const Header = ({ 
  menuOpen, 
  handleMenu, 
  navStuck, 
  pageProps: {
    headerStyle, 
    headerTitle, 
    pageTitle, 
    pageRef
  },
}) => {

  const [headerColor, setHeaderColor] = useState('hero hero-bg-dark');

  useEffect(() => {
    switch (headerStyle) {
      case 'blue':
        setHeaderColor('hero hero-bg-light');
        break;
      case 'white':
        setHeaderColor('hero hero-bg-white');
        break;
      case 'empty':
        setHeaderColor('hero hero-empty');
        break;
      case 'contact':
        setHeaderColor('hero hero-bg-contact');
        break;  
      case 'black':
        setHeaderColor('hero hero-bg-black');
        break;
      default:
        setHeaderColor('hero hero-bg-dark');
    }
  }, [headerStyle]);

  const renderHeaderContent = () => {
    switch (pageRef) {
      case 'Home':
        return <HeroDefault content={headerContent.home} />;
      case 'About':
        return <HeroDefault content={headerContent.about} />;
      case 'Careers':
        return <HeroDefault content={headerContent.careers} />;
      case 'positionsArchive':
        return <HeroDefault content={headerContent.positions} />;
      case 'TK_Position':
        return <HeroPositionSingle headerTitle={headerTitle} />;
      case 'WordPress VIP':
        return <HeroWpVip/>;
      case 'SAP':
        return <HeroSAP/>;
    };
  };

  return(
    <header className={headerColor}>
      <nav className={menuOpen ? "grid-container nav is-open" : "grid-container nav"}>
        <div className={navStuck ? "nav-logo is-stuck" : "nav-logo"}>
          <Link to={"/"} aria-label="Trew Knowledge Logo">
            <TkLogo alt="Trew Knowledge Logo" />
          </Link>
          <span>{pageTitle}</span>
        </div>
        <button className="hamburger-button" onClick={handleMenu} aria-label="open nav menu button">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>
      <MainMenu menuOpen={menuOpen} handleMenu={handleMenu}/>
      <div className="grid-container-narrow">
        {renderHeaderContent()}
      </div>
    </header>
  );
};

export default Header;
