import React from 'react';

const HeroDefault = ( {content} ) => {

  return (
    <>
      { content && (
        <>
          <h1 className="hero-title">
            {content.title ? content.title : null}
          </h1>
          {content.lead ? 
            <p className="lead">
              {content.lead}	
            </p> 
            : null
          }
        </>
      )}
    </>
  )
};

export default HeroDefault;
