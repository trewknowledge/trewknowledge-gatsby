import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby'

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
      <div className="grid-container-narrow archive-positions">
        <div className="grid-x grid-margin-x">      
          {pageContext.posts.map((post, id) => (
            <div className="cell" key={id}>
              <Link to={post.uri}>
                <h2>{post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt}} />
              </Link>
            </div>
          ))}
        </div>

        <hr/>

        {pageContext.allPosts ? <LatestNews latestNews={pageContext.allPosts} /> : null }
        
      </div>
  </Layout>
  )
}

export default ArchivePositions;
