import React from 'react';
import { Link } from 'gatsby'

const FeaturedWork = ({allWorks}) => {
  
  return (
    <section className="grid-container-narrow featured-work">
      <h1>Featured Work</h1>
      <div className="grid-x grid-margin-x grid-gallery">
        {allWorks.map((item) => (
          
          <div className="cell large-6 gallery-item" key={item.id}>
            <Link to={item.uri} >
              <figure className="image-hover-wrapper">
                {item.featuredImage ? <img src={item.featuredImage.sourceUrl} alt={item.title} /> : null}
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
