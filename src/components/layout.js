import React, { useState, useEffect } from "react";
import SEO from './seo';

import Header from "./Header";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import { loadOverlayScrollbars, scrollEventHandler, loadAOS } from '../utils/utils';

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

  // ----------------- Nav Logo Show/Hide -----------------
  const [navStuck, setNavStuck] = useState(false);

  // Add scroll event listener to '.os-viewport' to handle nav logo hiding event
  useEffect(() => {
    scrollEventHandler( setNavStuck );
  }, [props.location])

  // ----------------- OverlayScrollbars Library -----------------
  // Must load first since it generates elements
  useEffect(() => {
    loadOverlayScrollbars();
  }, []);

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
