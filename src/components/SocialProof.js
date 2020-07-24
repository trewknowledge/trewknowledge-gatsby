import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

const SocialProof = ({data}) => {
  console.log(data)
  return (
    <section className="social-proof section-background-white">
      <div className="grid-x small-up-2 medium-up-4 grid-margin-x">
        {data.allFile.edges.map((edge, id) => (
          <span className="social-proof-logo cell img-hover-link social-proof-logo-tall" key={id}>
          {edge.node.childImageSharp ? 
            <Img 
              objectFit="contain"
              fluid={edge.node.childImageSharp.fluid} 
              alt={edge.node.base.split(/-(.+)/).join(',').split('.').join(',').split(',')[1]}
              // Replace each seperator with a comma and do a final split on the comma. Refs below.
            /> 
            : null 
          }
          </span>
        ))}
      </div>
    </section>
  )
}

export default SocialProof;

/* 
https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character
https://egghead.io/lessons/gatsby-add-multiple-images-from-a-directory-with-gatsby-image?pl=using-gatsby-image-with-gatsby-ea85129e
*/
