import React from 'react'
import Layout from '../components/layout';

export default ({ pageContext }) => {

  const formatDate = () => {
    return new Date(pageContext.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout>
      <div className="hero-empty"></div>
      <div className="grid-container">
        <div className="grid-container-narrow">
          <h2 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
          <p className="article-date">{formatDate()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }}/>
        </div>
      </div>
    </Layout> 
  )
}

