import React from 'react';
import Layout from '../components/layout';
import WorksCard from '../components/works/WorksCard';

const ArchiveWorks = ({ pageContext, location }) => {

return (
  <Layout pageTitle={pageContext.archiveTitle} location={location.pathname} seo={pageContext.seo}>
      <div className="grid-container-narrow section-overlap-hero">
        <div className="grid-x grid-margin-x">
          {pageContext.posts.map((post, index) => {
            if (index === 0 ) {
              return (
                <div className="cell gallery-item" key={post.id} data-aos="fade-up">
                  <WorksCard postContext={post} />
                </div>
              )
            } else {
              return (
                <div className="cell gallery-item medium-6" key={post.id} data-aos="fade-up">
                  <WorksCard postContext={post} />
                </div>
              )
            }
          })}
        </div>
        
      </div>
  </Layout>
  )
}

export default ArchiveWorks;
