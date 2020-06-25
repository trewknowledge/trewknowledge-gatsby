import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby'
import carouselNext from "../assets/img/icons/carousel-next.svg"
import carouselSmall from "../assets/img/icons/carousel-next-small.svg"

import LatestNews from '../components/LatestNews'

const ArchivePositions = ({pageContext, location}) => {

  console.log(pageContext)

  return (
  <Layout 
    pageTitle={pageContext.archiveTitle} 
    location={location.pathname} 
    headerStyle={pageContext.headerStyle}
    pageRef={pageContext.pageRef}
  >
    <main>
      <div className="grid-container-narrow pt0">
        <div className="block-list">      
          {pageContext.posts.map((post, id) => (
            <Link to={post.uri} key={id} className="block-list-item">
              <h2 className="block-list-title">
                {post.title}
                <img class="hide-for-small-only hide-for-large" src={carouselNext} alt="arrow right"></img>
                <img class="hide-for-medium" src={carouselSmall} alt="arrow right"></img>
              </h2>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt}} />
            </Link>
            
          ))}
        </div>

        <hr/>
      </div>
      
      {pageContext.allPosts ? <LatestNews latestNews={pageContext.allPosts} /> : null }
    </main>
  </Layout>
  )
}

export default ArchivePositions;
