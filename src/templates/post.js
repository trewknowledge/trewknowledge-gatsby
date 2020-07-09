import React from 'react'
import Layout from '../components/layout';
import WorksSlider from '../components/WorksSlider'
import contentParser from 'gatsby-wpgraphql-inline-images';

export default ({ pageContext, location }) => {
  const content = pageContext.node.content;
  const pluginOptions = {
    wordPressUrl: 'https://trewknowledge-com-develop.go-vip.net',
    uploadsUrl: 'https://trewknowledge-com-develop.go-vip.net/wp-content/uploads/',
  };

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout pageTitle={pageContext.pageTitle} headerStyle={pageContext.headerStyle} location={location.pathname}>
      
      <div className="grid-container-narrow article pb0">
        <article className="article-content">
          <h2 dangerouslySetInnerHTML={{ __html: pageContext.node.title }} className="article-title"/>
          
          {pageContext.pageTitle === "News" ? <p className="article-date">{formatDate()}</p> : null} 
          
          <div>{contentParser({ content }, pluginOptions)}</div>
        </article>
        {pageContext.pageTitle !== "Privacy Policy" ? <hr/> : null} 
      </div>
      
      {pageContext.allWorks ? <WorksSlider pageContext={pageContext} /> : null}
        
    </Layout> 
  )
}

