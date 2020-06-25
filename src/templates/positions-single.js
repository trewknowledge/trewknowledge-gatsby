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
    <main>
      <article className="grid-container-narrow article">
          <h2 dangerouslySetInnerHTML={{ __html: pageContext.node.title }}/>
          <p className="article-date">{formatDate()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: pageContext.node.content }}/>
      </article>

      <section class="grid-container-narrow pt0">
        <h1 class="headline">How to apply</h1>
        <p class="sub-headline">Email your CV, along with a cover letter to <a href="mailto:careers@trewknowledge.com?subject=<?php echo esc_attr( get_the_title() ); ?>">careers@trewknowledge.com</a></p>
        <a class="button headline-cta" href="mailto:careers@trewknowledge.com?subject=<?php echo esc_attr( get_the_title() ); ?>">apply</a>
      </section>

    </main>
    </Layout> 
  )
}

