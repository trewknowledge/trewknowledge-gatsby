/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import MainMenu from "./MainMenu"

import '@wordpress/block-library/build-style/style.css'
import '../scss/main.scss'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove('no-scroll');
      document.querySelector('.header').classList.remove('is-open');
    } else {
      setMenuOpen(true);
      document.body.classList.add('no-scroll');
      document.querySelector('.header').classList.add('is-open');
    }
  }

  return (
    <div className="site">
      <Header handleMenu={handleMenu} />
      <MainMenu menuOpen={menuOpen} />
      <div className="site-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
