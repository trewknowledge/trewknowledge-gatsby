import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'

const NewsCard = ({ postContext }) => {

  const formatDate = () => {
    return new Date(postContext.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Link to={postContext.uri}>
      <div className="news-card">
        <figure className="image-hover-wrapper">
          {postContext.featuredImage.imageFile ? <Img fluid={postContext.featuredImage.imageFile.childImageSharp.fluid} alt={postContext.title} /> : <img src={postContext.featuredImage.sourceUrl} alt={postContext.title} />}
        </figure>
        <h3 className="card-title" dangerouslySetInnerHTML={{ __html: postContext.title }} />
        <p className="card-metadata">{formatDate()}</p>
      </div>
    </Link>
  )
};

export default NewsCard;
