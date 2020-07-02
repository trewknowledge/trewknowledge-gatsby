import React from 'react';
import Layout from '../components/layout'
// import { Link } from 'gatsby'
// import Pagination from '../components/Pagination';
import WorksCard from '../components/WorksCard';

export default ({ pageContext, location }) => (
  <Layout pageTitle={pageContext.archiveTitle} location={location.pathname}>
    {console.log(pageContext)}
      <div className="grid-container-narrow section-overlap-hero">
        <div className="grid-x grid-margin-x">
          {pageContext.posts.map((post, index) => {
            if (index === 0 ) {
              return (
                <div className="cell fade-in-up" key={post.id}>
                  <WorksCard postContext={post} />
                </div>
              )
            } else {
              return (
                <div className="cell medium-6" key={post.id}>
                  <WorksCard postContext={post} />
                </div>
              )
            }
          })}
        </div>
        
        {/* <Pagination 
          pageContext={pageContext}
        /> */}
      </div>
  </Layout>
)
