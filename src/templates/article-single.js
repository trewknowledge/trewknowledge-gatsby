import React from 'react'
import Layout from '../components/layout';

export default ({ pageContext, location }) => {

  return (
    <Layout 
      pageTitle={pageContext.pageTitle} 
      headerStyle={pageContext.headerStyle} 
      location={location.pathname}
    >
    {console.log(pageContext.node.content)}
    <div>Article Single</div>
    </Layout> 
  )
}

