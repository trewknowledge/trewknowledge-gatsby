import React from 'react'
import Layout from '../components/layout';
import WorksSlider from '../components/WorksSlider'

export default ({ pageContext, location }) => {

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout pageTitle={pageContext.pageTitle} pageType={pageContext.pageType} location={location.pathname}>
      <div className="grid-container-narrow article">
        <article className="article-content">
          <h2 dangerouslySetInnerHTML={{ __html: pageContext.node.title }}/>
          <p className="article-date">{formatDate()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: pageContext.node.content }}/>
        </article>
        <hr/>

        <WorksSlider pageContext={pageContext} />
      </div>
    </Layout> 
  )
}

