import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import parse from "html-react-parser";

const NewsCard = ({ postContext }) => {

  const formatDate = () => {
    return new Date(postContext.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Link to={postContext.uri}>
      <div className="news-card">
        <figure className="image-hover-wrapper">
          {postContext.featuredImage === null ? <h3>{postContext.title}</h3> : <Img fluid={postContext.featuredImage.node.localFile.childImageSharp.fluid} alt={postContext.title} />}
        </figure>
        <h3 className="card-title">
          {parse(postContext.title)}
        </h3>
        <p className="card-metadata">{formatDate()}</p>
      </div>
    </Link>
  )
};

export default NewsCard;
