import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm'

import scrollTo from 'gatsby-plugin-smoothscroll';
import { wpVipLogosArray } from '../js/logos';

export default({pageContext, location}) => (

  <Layout
    pageTitle={pageContext.node.title}
    location={location.pathname}
    pageRef={pageContext.node.template.templateName}
    headerStyle={pageContext.headerStyle}
  >
    <section className="section-background-white">
      <div className="grid-container-narrow">

        <div className="hero-connector-text">
          <div className="hero-connector-text-inner">
            <p>As Canada's first Solution Provider to Gigya, now SAP CDC, we can help your brand collect first-party customer data, build rich identity-based profiles, and turn unknown site visitors into known loyal customers with our Customer Identity Management solutions.</p>
            <button className="button" onClick={() => scrollTo('#contactFormTitle')}>
              get in touch
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="section-background-blue-gradient section-overlap">
      <div className="grid-container-narrow">

        <h1 className="section-title-feature-list">SAP CDC Services</h1>

        <ul className="feature-list">
          <li className="feature-list-item">
            <div className="feature-list-title-wrapper">
              <h2 className="feature-list-title">Solution Provider</h2>
              <div className="feature-list-divider" data-aos="grow-in"></div>
            </div>
            <ul className="feature-list-options">
              <li>Program Strategy</li>
              <li>Implementation Consulting</li>
              <li>Technical Consulting</li>
              <li>Implementations</li>
              <li>Solution Architecture</li>
              <li>Privacy by Design</li>
              <li>Data Migration</li>
            </ul>
          </li>
          <li className="feature-list-item">
            <div className="feature-list-title-wrapper">
              <h2 className="feature-list-title">Identity Management</h2>
              <div className="feature-list-divider" data-aos="grow-in"></div>
            </div>
            <ul className="feature-list-options">
              <li>Registration-as-a-Service (RaaS)</li>
              <li>Social Login</li>
              <li>Enterprise Architecture</li>
              <li>GDPR Compliance</li>
              <li>Security & data protection</li>
              <li>Risk Based Authentication</li>
            </ul>
          </li>
          <li className="feature-list-item">
            <div className="feature-list-title-wrapper">
              <h2 className="feature-list-title">Profile Management</h2>
              <div className="feature-list-divider" data-aos="grow-in"></div>
            </div>
            <ul className="feature-list-options">
              <li>Flexible and secure authentication</li>
              <li>Single, unified profile view</li>
              <li>Integrate across channels</li>
              <li>Federation & OIDC Authentication</li>
              <li>Bi-directional data flow</li>
              <li>Single Sign-On (SSO)</li>
              <li>Multi-Factor Authentication</li>
              <li>Dynamic Profile Schema</li>
            </ul>
          </li>
          <li className="feature-list-item">
            <div className="feature-list-title-wrapper">
              <h2 className="feature-list-title">Consent Management</h2>
              <div className="feature-list-divider" data-aos="grow-in"></div>
            </div>
            <ul className="feature-list-options">
              <li>Privacy-by-design</li>
              <li>Consent Auditing</li>
              <li>Preference Management</li>
              <li>Subscription Management</li>
            </ul>
          </li>
        </ul>
      </div>
		</section>
        

    <section className="social-proof section-background-white">
      <div className="grid-x small-up-2 medium-up-4 grid-margin-x">
        {wpVipLogosArray.map((logo, id) => (
          <span className="social-proof-logo cell img-hover-link social-proof-logo-tall" key={id}>
            <img src={logo.img} alt={logo.altTag} />
          </span>
        ))}
      </div>
    </section>

    <div className="grid-container-narrow">
      <h2 className="contact-form-title" id="contactFormTitle">Contact us about WordPress VIP.</h2>
      <ContactForm />
      <p className="form-helper-text">By sending this message you agree to the Privacy Policy.</p>
    </div>

  </Layout>
)
