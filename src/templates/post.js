import React, { Fragment } from 'react'
import Layout from '../components/layout';
import WorksSlider from '../components/WorksSlider'
import contentParser from 'gatsby-wpgraphql-inline-images';

export default ({ pageContext, location }) => {
  const content = pageContext.node.content;
  const pluginOptions = {
    wordPressUrl: 'https://trewknowledge.com/',
    uploadsUrl: 'https://trewknowledge.com/wp-content/uploads/',
  };

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout pageTitle={pageContext.pageTitle} headerStyle={pageContext.headerStyle} location={location.pathname}>
    {console.log(content)}
      <div className="grid-container-narrow article pb0">
        <article className="article-content">
          <h2 
            dangerouslySetInnerHTML={{ __html: pageContext.node.title }} 
            className={pageContext.pageTitle === "News" ? "article-title" : "article-section-title"} 
          />

          {pageContext.pageTitle === "News" ? <p className="article-date">{formatDate()}</p> : null} 
        
          <Fragment>
            {contentParser({ content }, pluginOptions)}
          </Fragment>
        </article>
        {pageContext.pageTitle !== "Privacy Policy" ? <hr/> : null} 
      </div>
      
      {pageContext.allWorks ? <WorksSlider pageContext={pageContext} /> : null}
        
    </Layout> 
  )
}

