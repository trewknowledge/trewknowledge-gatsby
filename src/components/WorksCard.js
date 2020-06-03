import React from 'react';
import { Link } from 'gatsby';

const WorksCard = ({ postContext }) => {

  return (
    <Link to={postContext.uri}>
      <div className="works-card">
        <figure>
          <img src={postContext.featuredImage ? postContext.featuredImage.sourceUrl : null} alt=""/>
        </figure>
      </div>
    </Link>
  )
};

export default WorksCard;
