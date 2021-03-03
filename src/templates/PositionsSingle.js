import React from 'react';
import parse from "html-react-parser";
import Layout from '../components/layout';

const PositionsSingle = ({ pageContext, location }) => {
  
  const formatDate = () => {
    return new Date(pageContext.node.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Layout 
      pageTitle={pageContext.pageTitle} 
      headerStyle={pageContext.headerStyle} 
      location={location.pathname}
      headerTitle={pageContext.node.title}
      pageRef={pageContext.pageRef}
      seo={pageContext.node.seo}
    >
      <article className="grid-container-narrow article">
        <h2>{parse(pageContext.node.title)}</h2>
        <p className="article-date">{formatDate()}</p>      
        <div>{parse(pageContext.node.content)}</div>
      </article>
    
      <section className="grid-container-narrow pt0">
        <h1 className="headline">How to apply</h1>
        <p className="sub-headline">Email your CV, along with a cover letter to <a href="mailto:careers@trewknowledge.com">careers@trewknowledge.com</a></p>
        <a className="button headline-cta" href="mailto:careers@trewknowledge.com">apply</a>
      </section>

    </Layout> 
  )
}

export default PositionsSingle;
