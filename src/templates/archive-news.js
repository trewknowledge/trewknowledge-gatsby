import React from 'react';
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import Pagination from '../components/Pagination';
import NewsCard from '../components/NewsCard';

const ArchiveNews = ({pageContext}) => {
  
  return (
  <Layout pageTitle={pageContext.archiveTitle}>
    <div className="hero bg-dark"></div>
    <div className="grid-container main-content">
      <div className="grid-container-narrow">
        <div className="grid-x grid-margin-x">
          {pageContext.posts.map((post, index) => {
            if (index === 0 && pageContext.currentPage === 1) {
              return (
                <div className="cell" key={index}>
                  <NewsCard postContext={post} />
                </div>
              )
            } else {
              return (
                <div className="cell medium-6" key={index}>
                  <NewsCard postContext={post} />
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
}

export default ArchiveNews;
