/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import SEO from './seo';

import Header from "./Header";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

import OverlayScrollbars from 'overlayscrollbars';

import '@wordpress/block-library/build-style/style.css';
import '../scss/main.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const Layout = ( props ) => {

  // ----------------- Handle Nav Menu -----------------
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

  // ----------------- OverlayScrollbars Library -----------------
  // Must load first since it generates elements
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
      },
    });
  }, [])

  // ----------------- Nav Logo Show/Hide -----------------
  const [navStuck, setNavStuck] = useState(false);

  // Add scroll event listener to '.os-viewport' to handle nav logo hiding event
  useEffect(() => {
    let pageWrapper = document.querySelector('.os-viewport');
    pageWrapper.scrollTo(0, 0);
    
    function handleScrollEvent() {
      let scrollPosY = pageWrapper.scrollTop;
      if(scrollPosY > 50) {
        setNavStuck(true)      
      } else {
        setNavStuck(false)
      }
    }
    
    if (pageWrapper) {
      pageWrapper.addEventListener("scroll", handleScrollEvent, true);
    }
    // this cleanup is performed when the component unmounts
    return () => {
      pageWrapper.removeEventListener("scroll", handleScrollEvent, true);
    }
  }, [props.location])

  // ----------------- AOS library -----------------
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

    // Add scroll event listener to '.os-viewport' so AOS doesn't conflict with OverlayScrollBars
    function refreshAOS() {
      AOS.refresh();
    }

    let pageWrapper = document.querySelector('.os-viewport');
    if (pageWrapper) {
      pageWrapper.addEventListener('scroll', refreshAOS);
    }

    return () => {
      pageWrapper.removeEventListener("scroll", refreshAOS);
    }
  });
  
  return (
    <div className="site">
      <SEO 
        title={props.pageTitle}
      />
      <Header 
        menuOpen={menuOpen} 
        handleMenu={handleMenu} 
        pageTitle={props.pageTitle} 
        headerStyle={props.headerStyle}
        headerTitle={props.headerTitle}
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

export default Layout;
