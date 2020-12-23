import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const pageTemplate = ({pageContext, location}) => (

  <Layout 
    // pageTitle={pageContext.node.title} 
    // location={location.pathname} 
    // headerStyle={pageContext.headerStyle}
    // pageRef={pageContext.node.template.templateName}
  >
    <div className="grid-container-narrow">
      <div className="callout">
        <h1 className="headline">Headline</h1>
        <p className="sub-headline">Sub headline</p>
        <Link className="button" to={"/positions"}>CTA Button</Link>
      </div>
    </div>
  </Layout>
)

export default pageTemplate;
