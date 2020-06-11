import React from 'react';
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import Pagination from '../components/Pagination';
import WorksCard from '../components/WorksCard';

export default ({ pageContext }) => (
  <Layout>
    <div className="hero bg-dark"></div>
    <div className="grid-container main-content">
      <div className="grid-container-narrow">
        <div className="grid-x grid-margin-x">
          {pageContext.posts.map((post, index) => {
            if (index === 0 && pageContext.currentPage === 1) {
              return (
                <div className="cell" key={index}>
                  <WorksCard postContext={post} />
                </div>
              )
            } else {
              return (
                <div className="cell medium-6" key={index}>
                  <WorksCard postContext={post} />
                </div>
              )
            }
          })}
        </div>
        
        <Pagination 
          pageContext={pageContext}
        />
      </div>
    </div>
  </Layout>
)