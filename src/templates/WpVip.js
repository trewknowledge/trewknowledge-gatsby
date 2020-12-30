import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

import ContactForm from '../components/ContactForm'
import SocialProof from "../components/SocialProof"

import scrollTo from 'gatsby-plugin-smoothscroll';

const WpVip = ({pageContext, location}) => {
  const data = useStaticQuery(graphql`
    query socialProofVipQuery {
      allFile(filter: {relativeDirectory: {eq: "img/social-proof-vip"}}, sort: {order: ASC, fields: base}) {
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

  return(
    <Layout
      pageTitle={pageContext.node.title}
      location={location.pathname}
      pageRef={pageContext.node.template.templateName}
      headerStyle={pageContext.headerStyle}
    >
      <section className="section-background-black section-overlap">
        <div className="grid-container-narrow">

          <div className="hero-connector-text">
            <div className="hero-connector-text-inner">
              <p>As the only Canadian based WordPress VIP Gold Agency Partner, we deliver enterprise digital solution using the world’s most trusted platform. From Toronto to Singapore our global reach helps clients scale their digital footprint.</p>
              <button className="button" onClick={() => scrollTo('#contactFormTitle')}>
                get in touch
              </button>
            </div>
          </div>

          <h1 className="section-title-feature-list">WordPress VIP Services</h1>

          <ul className="feature-list">
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">Digital Strategy</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>Monetization Strategy</li>
                <li>Editorial Strategy</li>
                <li>Metered Paywalls</li>
                <li>Goal Setting & Benchmarking</li>
                <li>On-Going Support</li>
              </ul>
            </li>
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">Theme Development</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>Custom Themes</li>
                <li>Security Review & Auditing</li>
                <li>Performance Review & Auditing</li>
                <li>Continuous Integration</li>
              </ul>
            </li>
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">Plugin Development</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>Custom WordPress Plugins</li>
                <li>Plugin Security Audits</li>
                <li>Plugin Enhancements</li>
              </ul>
            </li>
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">Data Migration</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>Legacy CMS to WordPress</li>
                <li>WordPress-to-WordPress</li>
                <li>cIAM to WordPress</li>
              </ul>
            </li>
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">API & Integrations</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>WordPress REST API</li>
                <li>Apple News</li>
                <li>Google AMP</li>
                <li>Facebook Instant Articles</li>
              </ul>
            </li>
            <li className="feature-list-item">
              <div className="feature-list-title-wrapper">
                <h2 className="feature-list-title">Support</h2>
                <div className="feature-list-divider" data-aos="grow-in"></div>
              </div>
              <ul className="feature-list-options">
                <li>On-Going Support</li>
                <li>Platform Support & Updates</li>
                <li>A/B Testing</li>
                <li>User Experience Analysis</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <SocialProof data={data} />

      <div className="grid-container-narrow">
        <h2 className="contact-form-title" id="contactFormTitle">Contact us about WordPress VIP.</h2>
        <ContactForm formTitle={pageContext.node.title} />
        <p className="form-helper-text">By sending this message you agree to the Privacy Policy.</p>
      </div>

    </Layout>
  )
}

export default WpVip;
