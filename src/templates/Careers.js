import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Careers = ( { pageContext, location } ) => (

  <Layout 
    pageTitle={pageContext.node.title} 
    location={location.pathname} 
    headerStyle={pageContext.headerStyle}
    pageRef={pageContext.node.template.templateName}
    seo={pageContext.node.seo}
  >
    
      <div className="grid-container-narrow">
        <div className="callout">
          <h1 className="headline">We are always looking for awesome people.</h1>
          <p className="sub-headline">We’re hiring people who share our values across all disciplines and experience levels.</p>
          <Link className="button headline-cta" to={"/positions"}>see open positions</Link>
        </div>
      </div>

      <section className="section-background-tertiary">
        <div className="grid-container-narrow">
          <h1 className="section-title-feature-list">Benefits & Perks</h1>
            <ul className="feature-list">

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Compensation
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Competitive Wages</li>
                  <li>Paid Vacation</li>
                  <li>Paid Sick & Personal Days</li>
                  <li>Group Benefits</li>
                </ul>
              </li>

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Continuous Growth
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Conference and training budget</li>
                  <li>Lunch & Learns</li>
                </ul>
              </li>

            </ul>
        </div>
      </section>
    
  </Layout>
)

export default Careers;
