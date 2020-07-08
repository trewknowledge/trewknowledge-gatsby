import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import LatestNews from '../components/LatestNews'

import DiscoveryIcon from '../assets/img/svgs/discovery-icon.svg';
import UiuxIcon from '../assets/img/svgs/uiux-icon.svg';
import EngineeringIcon from '../assets/img/svgs/engineering-icon.svg';
import InsightsIcon from '../assets/img/svgs/insights-icon.svg';
import AdaptionIcon from '../assets/img/svgs/adaptation-icon.svg';

export default ({pageContext, location}) => (

  <Layout 
    pageTitle={pageContext.node.title} 
    location={location.pathname} 
    pageRef={pageContext.node.template.templateName}
  >
    
      <section className="grid-container-narrow pb0">

        <p className="lead lead-narrow">Our team of dedicated professionals align themselves with your particular business goals, creating digital development, brand strategy, and customer identity management solutions that take your brand where you want it to be.</p>

        <p className="lead lead-narrow">We deliver award-winning solutions that leverage our innovative vision, technical prowess, and unmatched customer service. By partnering with some of the world’s foremost technology leaders, we’re able offer only the most leading-edge technology and put them to work for you.</p>

        <div className="wp-intro-section">
          <Link className="wp-intro-section-button button" to={"/contact"}>Get Started</Link>
        </div>
        </section>

        <section className="grid-container-narrow pt0">
        <h2>How we work</h2>

        <p>Communications in today’s market is constantly evolving, and the need to connect with your audience is more important than ever. With robust technology, compelling creative, and targeted marketing strategies, we develop innovative solutions that engage customers and drive revenue.</p>

        <ul className="feature-blocks">
          <li className="feature-blocks-item" data-aos="animate-icon">
            <div className="feature-blocks-img-wrapper">
              <DiscoveryIcon className="feature-blocks-img" alt="Discovery icon" aria-describedby="Discovery icon"/>
            </div>
            <div className="feature-blocks-content">
              <h5 className="feature-blocks-title">Discovery</h5>
              <p className="feature-blocks-description">We work with your leaders and stakeholders to discover your business needs, wishes, and goals. Our holistic approach ensures that our solutions are customized to your brand, and are developed with your success in mind.</p>
            </div>
          </li>
          <li className="feature-blocks-item" data-aos="animate-icon">
            <div className="feature-blocks-img-wrapper">
              <UiuxIcon className="feature-blocks-img" alt="UI/UX icon" aria-describedby="UI/UX icon"/>
            </div>
            <div className="feature-blocks-content">
              <h5 className="feature-blocks-title">UI/UX</h5>
              <p className="feature-blocks-description">In tandem with your goals we identify through discovery, we apply creative conceptualization in design, function, and user experience to create beautiful, clear messages that your audience will respond to.</p>
            </div>
          </li>
          <li className="feature-blocks-item" data-aos="animate-icon">
            <div className="feature-blocks-img-wrapper">
              <EngineeringIcon className="feature-blocks-img" alt="Engineering icon" aria-describedby="Engineering icon"/>
            </div>
            <div className="feature-blocks-content">
              <h5 className="feature-blocks-title">Engineering</h5>
              <p className="feature-blocks-description">Ideas are great, but they need to work. Our team of skilled developers engineer custom solutions compatible across multiple channels, platforms, and media, creating compelling brand experiences on the world’s most capable technologies.</p>
            </div>
          </li>
          <li className="feature-blocks-item" data-aos="animate-icon">
            <div className="feature-blocks-img-wrapper">
              <InsightsIcon className="feature-blocks-img" alt="Insights icon" aria-describedby="Insights icon"/>
            </div>
            <div className="feature-blocks-content">
              <h5 className="feature-blocks-title">Insights</h5>
              <p className="feature-blocks-description">Collect more data, build rich, identity-based profiles, and turn unknown site visitors into loyal customers with our Customer Identity Management solutions. Our solutions help you build meaningful relationships with your audience, leading to better customer experiences, relevant, targeted messaging, and improved ROI on your marketing campaigns.</p>
            </div>
          </li>
          <li className="feature-blocks-item" data-aos="animate-icon">
            <div className="feature-blocks-img-wrapper">
              <AdaptionIcon className="feature-blocks-img" alt="Adaptation icon" aria-describedby="Adaptation icon"/>
            </div>
            <div className="feature-blocks-content">
              <h5 className="feature-blocks-title">Adaptation</h5>
              <p className="feature-blocks-description">Things change quickly. If you can’t adapt to changing demands, market trends, and economic shifts, you could be left behind. We understanding the ever-changing trends in marketing, and our knowledge and expertise will keep your brand ahead of the rest and foremost in the minds of your customers.</p>
            </div>
          </li>
        </ul>
      </section>

      {pageContext.allPosts ? <LatestNews latestNews={pageContext.allPosts} /> : null}
    
  </Layout>
)
