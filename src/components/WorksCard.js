import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'

const WorksCard = ({ postContext }) => {

  return (
    <Link to={postContext.uri}>
      <div className="works-card">
        <figure className="image-hover-wrapper">
          {postContext.featuredImage.imageFile ? <Img fluid={postContext.featuredImage.imageFile.childImageSharp.fluid} alt={postContext.title} />  : <img src={postContext.featuredImage.sourceUrl} alt={postContext.title} />}
          <figcaption>{postContext.title}</figcaption>  
        </figure>
      </div>
    </Link>
  )
};

export default WorksCard;
