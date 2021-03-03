import React from 'react';
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ pageContext, location }) => {

  return (
    <Layout 
      pageTitle={pageContext.node.title} 
      location={location.pathname} 
      pageRef={pageContext.node.template.templateName}
      headerStyle={pageContext.headerStyle}
      seo={pageContext.node.seo}
    >
        <div className="header-contact">
          <address>
            <h2 className="header-contact-title">
              372 Richmond Street West, 
            <br className="hide-for-large"/>
              Suite 210
            </h2>
            <h2 className="header-contact-title">
              Toronto, ON M5V 1X6
            </h2>
            <h2 className="header-contact-title">
              +1.647.289.6838
            </h2>
            <h2 className="header-contact-title">
              <a href="mailto:info@trewknowledge.com">info@trewknowledge.com</a>
            </h2>
          </address>
          <ul className="menu">
            <li>
              <a href="https://twitter.com/trewknowledge" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/trewknowledge" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/1022792" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
            <li>
              <a href="https://www.instagram.com/trewknowledge/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="grid-container-narrow">
          <ContactForm formTitle={pageContext.node.title} />
          <p className="form-helper-text">By sending this message you agree to the Privacy Policy.</p>
        </div>
    </Layout>
  )
}

export default Contact;
