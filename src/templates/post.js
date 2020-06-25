import React from 'react'
import Layout from '../components/layout';
import WorksSlider from '../components/WorksSlider'

export default ({ pageContext, location }) => {

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout pageTitle={pageContext.pageTitle} headerStyle={pageContext.headerStyle} location={location.pathname}>
      <main>
        <div className="grid-container-narrow article pb0">
          <article className="article-content">
            <h2 dangerouslySetInnerHTML={{ __html: pageContext.node.title }} className="article-section-title"/>
            <p className="article-date">{formatDate()}</p>
            
            <div dangerouslySetInnerHTML={{ __html: pageContext.node.content }}/>
          </article>
          <hr/>
        </div>
        
        
        <WorksSlider pageContext={pageContext} />
        
      </main>
    </Layout> 
  )
}

