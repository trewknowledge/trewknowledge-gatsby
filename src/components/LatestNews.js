import React from 'react';
import NewsCard from '../components/NewsCard'

const LatestNews = ({ latestNews }) => (

  <section className="grid-container-narrow">
    <h1 className="section-title">Latest News</h1>
      <div className="grid-x grid-margin-x">
      {latestNews.map((post, id) => (
        <div className="cell medium-6" key={id}>
          <NewsCard postContext={post} />
        </div>
      ))}
    </div>
  </section>
)

export default LatestNews;
