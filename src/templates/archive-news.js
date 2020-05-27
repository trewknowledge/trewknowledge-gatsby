import React from 'react';
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import Pagination from '../components/Pagination';
import NewsCard from '../components/NewsCard';

export default ({ pageContext }) => (
  <Layout>
    <div className="hero"></div>
    {console.log(pageContext)}
    <div className="grid-container">
      <div className="grid-container-narrow">
        {pageContext.posts.map((post, index) => (
          <NewsCard postContext={post} key={index} />
        ))}

        <Pagination 
          pageContext={pageContext}
        />
      </div>
    </div>
  </Layout>
)
