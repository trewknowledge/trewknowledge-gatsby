import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({pageContext}) => (
  
  <Layout pageTitle={pageContext.title}>
    <div className="hero bg-light">
      <div className="grid-container">
        <div className="grid-container-narrow">
          <div className="careers-title">
            <h2>This is the careers template</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="grid-container">
      <div className="grid-container-narrow">
        <main>
          <div className="callout">
            <h1 className="headline">We are always looking for awesome people.</h1>
            <p className="sub-headline">We’re hiring people who share our values across all disciplines and experience levels.</p>
            <Link to={"/positions"} style={{textDecoration: "underline"}}>see open positions</Link>
          </div>
        </main>
      </div>
    </div>
  </Layout>
)
