import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({pageContext, location}) => (

  <Layout 
    // pageTitle={pageContext.node.title} 
    // location={location.pathname} 
    // headerStyle={pageContext.headerStyle}
    // pageRef={pageContext.node.template.templateName}
  >
  {console.log(pageContext)}
    <div className="grid-container-narrow">
      <div className="callout">
        <h1 className="headline">Headline</h1>
        <p className="sub-headline">Sub headline</p>
        <Link className="button" to={"/positions"}>CTA Button</Link>
      </div>
    </div>
  </Layout>
)
