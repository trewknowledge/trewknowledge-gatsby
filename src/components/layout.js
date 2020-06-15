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
import { useEffect } from "react"

const Layout = ( props ) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove('no-scroll');
    } else {
      setMenuOpen(true);
      document.body.classList.add('no-scroll');
    }
  }

  const [navStuck, setNavStuck] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setNavStuck(true)
      } else {
        setNavStuck(false)
      }
    })
  }, [])

  return (
    <div className="site">
      <Header 
        menuOpen={menuOpen} 
        handleMenu={handleMenu} 
        pageTitle={props.pageTitle} 
        navStuck={navStuck}
      />
      <div className="site-content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
