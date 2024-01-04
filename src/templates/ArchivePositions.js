import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import parse from "html-react-parser";

import CarouselNext from "../assets/img/svgs/carousel-next.svg"
import CarouselNextSmall from "../assets/img/svgs/carousel-next-small.svg"

import LatestNews from '../components/news/LatestNews'

const ArchivePositions = ({pageContext, location}) => {
  return (
  <Layout 
    pageTitle={pageContext.archiveTitle} 
    location={location.pathname} 
    headerStyle={pageContext.headerStyle}
    pageRef={pageContext.pageRef}
    seo={pageContext.seo}
    pageContext={pageContext}
  >
    
    <div className="grid-container-narrow pt0">
      <div className="block-list">      
        <div id="HumiJobBoard" data-company="trewknowledge"></div><script src="https://trewknowledge.applytojobs.ca/embed.js" async defer></script>
      </div>
      <hr/>
    </div>
    
    {pageContext.allPosts && <LatestNews latestNews={pageContext.allPosts} /> }
    
  </Layout>
  )
}

export default ArchivePositions;
