/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import ContactSection from "./ContactSection"

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
    function handleScrollEvent() {
      if(window.scrollY > 50) {
        setNavStuck(true)
      } else {
        setNavStuck(false)
      }
    }
    
    window.addEventListener("scroll", handleScrollEvent, true);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent, true);
    }
  }, [props.location])

  console.log('layout props', props)

  return (
    <div className="site">
      <Header 
        menuOpen={menuOpen} 
        handleMenu={handleMenu} 
        pageTitle={props.pageTitle} 
        headerStyle={props.headerStyle}
        headerContent={props.headerContent}
        pageRef={props.pageRef}
        navStuck={navStuck}
      />
      <main>
        {props.children}
      </main>
      <ContactSection pageRef={props.pageRef} />
      <Footer />
    </div>
  )
}

export default Layout
