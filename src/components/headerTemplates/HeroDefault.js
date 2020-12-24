import React from 'react';

const HeroDefault = ( {content} ) => (
  <>
    <h1 className="hero-title">
      {content.title}
    </h1>
    {content.lead ? 
      <p className="lead">
        We look to provide equal opportunities and do not discriminate against race, religion, gender, sexual orientation, age, or disability status. We believe everyone has something positive to contribute. 	
      </p> 
      : null
    }
  </>
);

export default HeroDefault;
