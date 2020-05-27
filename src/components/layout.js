/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"

import '@wordpress/block-library/build-style/style.css'
import '../scss/main.scss'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="site">
      <Header handleMobileMenu={handleMobileMenu} />
      <MobileMenu menuOpen={menuOpen} handleMobileMenu={handleMobileMenu} />
      <div className="site-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
