import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby';

import LatestNews from '../components/news/LatestNews';
import FeaturedWork from "../components/works/FeaturedWork";

import WpLogo from '../assets/img/svgs/wp-vip-cert-logo.svg';
import SocialProof from "../components/SocialProof"

const HomePage = ({ pageContext, location }) => {
  const brandLogos = useStaticQuery(graphql`
    query socialProofHomeQuery {
      allFile(filter: {relativeDirectory: {eq: "img/social-proof-home"}}, sort: {order: ASC, fields: base}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 80) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout 
      pageTitle={"Trew Knowledge"} 
      location={location.pathname} 
      pageRef={"Home"}
      seo={pageContext.node.seo}
      pageContext={pageContext}
    > 
      
      <section className="grid-container-narrow">
        <p className="lead">
          As the only Canadian based WordPress VIP Gold Agency Partner, we deliver enterprise digital solutions using the world’s most trusted platform. From Toronto to Singapore our global reach helps clients scale their digital footprint.
        </p>
        <div className="wp-intro-section">
          <Link to={"/wordpress-vip"} className="wp-intro-section-button button" aria-label="To Wordpress VIP page">
            learn more
          </Link>
          <WpLogo className="wp-intro-section-img" alt="WordPress VIP logo" />
        </div>
      </section>

      <section className="section-background section-overlap">
        <div className="grid-container-narrow">
          <h1 className="section-title-feature-list">Services</h1>
            <ul className="feature-list">

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Strategy & Consulting
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Digital Strategy</li>
                  <li>Technical Consulting</li>
                  <li>Program Management</li>
                  <li>Communications Strategy</li>
                  <li>Gamification & Loyalty</li>
                  <li>Market Research</li>
                </ul>
              </li>

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Design
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Interactive Web Design</li>
                  <li>Information Architecture</li>
                  <li>User Experience (UX) Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>Mobile App Design</li>
                  <li>Graphic Design</li>
                  <li>Prototyping</li>
                  <li>Design Research</li>
                  <li>A/B Testing</li>
                </ul>
              </li>

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Technology
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Web Development</li>
                  <li>Enterprise Wordpress VIP</li>
                  <li>eCommerce</li>
                  <li>Mobile App Development</li>
                  <li>System Integrations</li>
                  <li>Marketing Automation</li>
                </ul>
              </li>

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Data
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Legacy CMS Data Migration</li>
                  <li>Wordpress-to-Wordpress</li>
                  <li>Migration</li>
                  <li>Wordpress VIP Hosting</li>
                  <li>Data Engineering</li>
                  <li>Enterprise Architecture</li>
                </ul>
              </li>

              <li className="feature-list-item">
                <div className="feature-list-title-wrapper">
                  <h2 className="feature-list-title">
                    Identity Management
                  </h2>
                  <div className="feature-list-divider" data-aos="grow-in"></div>
                </div>
                <ul className="feature-list-options">
                  <li>Customer Identity & Access</li>
                  <li>Management</li>
                  <li>Social Login</li>
                  <li>Consent Management</li>
                  <li>Preference Management</li>
                  <li>Privacy by Design</li>
                </ul>
              </li>

            </ul>
        </div>
      </section>

      <SocialProof data={brandLogos} />

      {pageContext.allWorks && <FeaturedWork allWorks={pageContext.allWorks} />}
      {pageContext.allPosts && <LatestNews latestNews={pageContext.allPosts} />}
      
    </Layout>
  )
}

export default HomePage;
