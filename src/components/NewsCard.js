import React from 'react';
import { Link } from 'gatsby';

const NewsCard = ({ postContext }) => (
  <div className="news-card">
    <img src={postContext.featuredImage ? postContext.featuredImage.sourceUrl : null} alt=""/>
    <h3 dangerouslySetInnerHTML={{ __html: postContext.title }} />
    <p>{postContext.date}</p>
    <p dangerouslySetInnerHTML={{ __html: postContext.excerpt }} />
    <div>
      <Link to={postContext.uri}>Read More</Link>
    </div>
  </div>
);

export default NewsCard;
