import React from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const FeaturedWork = ({allWorks}) => {
  
  return (
    <section className="grid-container-narrow featured-work">
      <h1>Featured Work</h1>
      <div className="grid-x grid-margin-x grid-gallery">
        {allWorks.map((item) => (
          
          <div className="cell large-6 gallery-item" key={item.id}>
            <Link to={item.uri} >
              <figure className="image-hover-wrapper">
                {item.featuredImage.imageFile ? <Img fluid={item.featuredImage.imageFile.childImageSharp.fluid} alt={item.title} />  : <img src={item.featuredImage.sourceUrl} alt={item.title} />}
                <figcaption>
                  {item.title}
                </figcaption>
              </figure>
            </Link>
          </div>
          
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork;
