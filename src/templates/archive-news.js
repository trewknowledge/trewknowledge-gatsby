import React, { useState } from 'react';
import Layout from '../components/layout'
import NewsCard from '../components/NewsCard';

const ArchiveNews = ({pageContext, location}) => {

  const [postsToShow, setPostsToShow] = useState(9);
  const [allPosts, setAllPosts] = useState(pageContext.posts);

  const posts = allPosts.slice(0, postsToShow);

  const handleClick = () => {
    setPostsToShow( postsToShow + 9 );
  }

  return (
  <Layout pageTitle={pageContext.archiveTitle} location={location.pathname}>
    <div className="grid-container-narrow section-overlap-hero">
      <div className="grid-x grid-margin-x">
        {posts.map((post, index) => {
          if (index === 0 ) {
            return (
              <div className="cell aos-init aos-animate" key={post.id} data-aos="fade-up">
                <NewsCard postContext={post} />
              </div>
            )
          } else {
            return (
              <div className="cell medium-6 aos-init aos-animate" key={post.id} data-aos="fade-up">
                <NewsCard postContext={post} />
              </div>
            )
          }
        })}
      </div>

      
      {posts.length < allPosts.length ? 
        <div className="infinite-handle">
          <button className="button" onClick={() => handleClick()}>Load More</button> 
        </div>
      : null}
      
    </div>
  </Layout>
  )
}

export default ArchiveNews;
