/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"

import Header from "./Header"
import Footer from "./Footer"
import ContactSection from "./ContactSection"

import AOS from 'aos';
import OverlayScrollbars from 'overlayscrollbars'

import '@wordpress/block-library/build-style/style.css'
import '../scss/main.scss'
import 'overlayscrollbars/css/OverlayScrollbars.css';

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
    OverlayScrollbars(document.body, { 
      className: 'os-theme-dark',
      // Defines how the overflow should be handled for each axis
      overflowBehavior: {
        // visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
        x: 'scroll',
        // visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
        y: 'scroll',
      },
      // Defines the behavior of the custom scrollbars.
      scrollbars: {
        visibility: 'auto', //visible || hidden || auto || v || h || a
        autoHide: 'scroll', //never || scroll || leave || n || s || l
        autoHideDelay: 800, //number
        dragScrolling: true, //true || false
        clickScrolling: true, //true || false
        touchSupport: true, //true || false
        snapHandle: true, //true || false
        initialize: false,
      },
    });
  }, [])
  
  useEffect(() => {
    function handleScrollEvent() {
      if(window.scrollY > 50) {
        setNavStuck(true)
        // console.log('nav stuck')
      } else {
        setNavStuck(false)
        // console.log('NAV IS STATIC')
      }
    }
    
    window.addEventListener("scroll", handleScrollEvent, true);

    // this cleanup is performed when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollEvent, true);
    }
  }, [props.location])

  // AOS library
  // let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });


    // can this be moved into it's own use effect?
    function refreshAOS() {
      AOS.refresh();
      console.log('aos refreshed');
    }

    let pageWrapper = document.querySelector('.os-viewport');
    if (pageWrapper) {
      pageWrapper.addEventListener('scroll', refreshAOS);
    }

    return () => {
      pageWrapper.removeEventListener("scroll", refreshAOS);
    }

  });

  // can we remove the AOS event listener?
  // need to fix the 'nav-stuck' listener 

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
