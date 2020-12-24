import React from 'react';
import parse from "html-react-parser";
import Layout from '../components/layout';
import WorksSlider from '../components/WorksSlider';

const postTemplate = ({ pageContext, location }) => {
  console.log(pageContext)

  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout 
      pageTitle={pageContext.pageTitle} 
      headerStyle={pageContext.headerStyle} 
      location={location.pathname}
    >
    
      <div className="grid-container-narrow article pb0">
        <article className="article-content">
          <h2 className={pageContext.pageTitle === "News" ? "article-title" : "article-section-title"}>
            {parse(pageContext.node.title)}
          </h2> 
          {pageContext.pageTitle === "News" ? 
          <p className="article-date">{formatDate()}</p> : null} 
          
          <div>{parse(pageContext.node.content)}</div>

        </article>
        {pageContext.pageTitle !== "Privacy Policy" ? <hr/> : null} 
      </div>
      
      {pageContext.allWorks ? <WorksSlider pageContext={pageContext} /> : null}
        
    </Layout> 
  )
}

export default postTemplate;
