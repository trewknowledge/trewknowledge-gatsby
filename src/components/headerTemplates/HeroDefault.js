import React from 'react';

const HeroDefault = ( {content} ) => {

  return (
    <>
      { content && (
        <>
          <h1 className="hero-title">
            {content.title && content.title}
          </h1>
          {content.lead && 
            <p className="lead">
              {content.lead}	
            </p> 
          }
        </>
      )}
    </>
  )
};

export default HeroDefault;
