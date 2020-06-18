import React from 'react';
import { Link } from 'gatsby';

const NewsCard = ({ postContext }) => {

  const formatDate = () => {
    return new Date(postContext.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Link to={postContext.uri}>
      <div className="news-card">
        <figure className="image-hover-wrapper">
          <img src={postContext.featuredImage ? postContext.featuredImage.sourceUrl : null} alt=""/>
        </figure>
        <h3 className="card-title" dangerouslySetInnerHTML={{ __html: postContext.title }} />
        <p className="card-metadata">{formatDate()}</p>
      </div>
    </Link>
  )
};

export default NewsCard;
