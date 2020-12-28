import React, { useState, useEffect, useRef } from "react";
import SEO from './seo';

import Header from "./Header";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import { loadOverlayScrollbars, loadAOS } from '../utils/utils';

import '@wordpress/block-library/build-style/style.css';
import '../scss/main.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const Layout = ( props ) => {
console.log(props)
  // ----------------- OverlayScrollbars Library -----------------
  // Must load first since it generates elements
  useEffect(() => {
    loadOverlayScrollbars();
  }, []);

  // ----------------- Toggle nav menu -----------------
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

  // ----------------- Show/hide nav logo on scroll -----------------
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
    // clean up event listener when component unmounts
    return () => {
      pageWrapper.removeEventListener("scroll", handleScrollEvent, true);
    }
  }, [props.location])

  // ----------------- AOS library -----------------
  useEffect(() => {
    loadAOS();
  });
  
  return (
    <div className="site">
      <SEO 
        title={props.pageTitle}
      />
      <Header 
        menuOpen={menuOpen} 
        handleMenu={handleMenu} 
        navStuck={navStuck}
        pageProps={props}
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
