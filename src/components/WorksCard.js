import React from 'react';
import { Link } from 'gatsby';


const WorksCard = ({ postContext }) => {

  console.log('WorksCard', postContext)
  return (
    <Link to={postContext.uri}>
      <div className="works-card">
        <figure className="image-hover-wrapper">
          {postContext.featuredImage ? <img src={postContext.featuredImage.sourceUrl} alt=""/> : null} 
          <figcaption>{postContext.title}</figcaption>  
        </figure>
      </div>
    </Link>
  )
};

export default WorksCard;
