import React from 'react'
import Layout from '../components/layout';

export default ({ pageContext, location }) => {
  console.log(pageContext)

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout 
      pageTitle={pageContext.pageTitle} 
      headerStyle={pageContext.headerStyle} 
      location={location.pathname}
      headerContent={pageContext.node.title}
      pageRef={pageContext.node.__typename}
    >
      <div className="grid-container-narrow article">
        <article className="article-content">
          <h2 dangerouslySetInnerHTML={{ __html: pageContext.node.title }}/>
          <p className="article-date">{formatDate()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: pageContext.node.content }}/>
        </article>
      </div>
    </Layout> 
  )
}

