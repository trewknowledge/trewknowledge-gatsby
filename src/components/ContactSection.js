import React from 'react';

const ContactSection = ({pageRef}) => (
  <section className={pageRef === 'Careers' ? "contact-section contact-section-careers" : "contact-section"}>
    <div className="contact-section-inner">
      <h3 className="contact-section-title">We should talk.</h3>
      <address>
			  372 Richmond Street West, Suite 210
        <br/>
			  Toronto, ON  M5V 1X6
        <br/>
        <br/>
        <a href="tel:1-647-289-6838">+1.647.289.6838</a>
        <br/>
        <a href="mailto:info@trewknowledge.com">info@trewknowledge</a>.com
      </address>
    </div>
  </section>
)

export default ContactSection;
