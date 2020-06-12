import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ArchivePositions = ({pageContext}) => {
  
  // console.log(pageContext.archiveTitle)

  return (
  <Layout pageTitle={pageContext.archiveTitle}>
    <div className="hero hero-empty"></div>
    <div className="grid-container archive-positions">
      <div className="grid-container-narrow">
        <div className="grid-x grid-margin-x">
          
          <h1>Open Positions</h1>
          
          {pageContext.posts.map((post, i) => (
            <div className="cell" key={i}>
              <Link to={post.uri}>
                <h2>{post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt}} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default ArchivePositions;
