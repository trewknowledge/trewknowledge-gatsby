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
    seoTitle={pageContext.seoTitle}
  >
    
    <div className="grid-container-narrow pt0">
      <div className="block-list">      
        {pageContext.posts.map((post) => (
          <Link to={post.uri} key={post.id} className="block-list-item">
            <h2 className="block-list-title">
              {post.title}
              <CarouselNext className="hide-for-small-only hide-for-large teal-arrow" alt="arrow right"/>
              <CarouselNextSmall className="hide-for-medium" alt="arrow right"/>
            </h2>
            {parse(post.excerpt)}
          </Link>
          
        ))}
      </div>

      <hr/>
    </div>
    
    {pageContext.allPosts && <LatestNews latestNews={pageContext.allPosts} /> }
    
  </Layout>
  )
}

export default ArchivePositions;
