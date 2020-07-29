import React from 'react';

const ContactForm = ({formTitle}) => {
  // See form notes at the bottom of this page
  return (
    <form className="contact-form" name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <input type="hidden" name="Referring Page" value={formTitle} />
      <div>
        <label htmlFor="input-name" className="visuallyhidden">Name</label>
        <input type="text" placeholder="Name*" name="name" id="input-name" required aria-required="true" />
      </div>
      <div>
        <label htmlFor="input-company" className="visuallyhidden">Company</label>
        <input type="text" placeholder="Company*" name="company" id="input-company" required aria-required="true" />
      </div>
      <div>
        <label htmlFor="input-email" className="visuallyhidden">Company</label>
        <input type="email" placeholder="Email*" name="email" id="input-email" required aria-required="true" />
      </div>
      <div>
        <label htmlFor="input-website" className="visuallyhidden">Website</label>
        <input type="url" placeholder="Website" name="website" id="input-website" />
      </div>
      <div>
        <label htmlFor="input-phone" className="visuallyhidden">Phone</label>
        <input type="tel" placeholder="Phone" name="phone" id="input-phone" />
      </div>
      <div>
        <label htmlFor="input-message" className="visuallyhidden">Message*</label>
        <textarea name="message" rows="20" placeholder="Message*" id="input-message" required aria-required="true"></textarea>
      </div>
      <button type="submit" className="pushbutton-wide">SEND</button>
    </form>
  )
}

export default ContactForm;

/*
1. The form has a data-netlify="true" attribute, which tells Netlify to register the form while building your site.

2. The form has a name attribute describing it. This is the name Netlify will give the form when you deploy this code.

3. The form’s name attribute is repeated in a hidden form-name field. This is absolutely necessary. If you omit this field or mistype the name, your entries will either throw an error or get lost somewhere in the internet abyss.

4.Every field has a name attribute. A field must have a name for that data to be persisted within Netlify.

https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby
*/
