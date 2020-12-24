import OverlayScrollbars from 'overlayscrollbars';

export const loadOverlayScrollbars = () => (
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
  })  
);

export const scrollEventHandler = ( setNavStuck ) => {
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
};

export const loadAOS = () => {
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
};
