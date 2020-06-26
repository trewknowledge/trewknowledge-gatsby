import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import LatestNews from '../components/LatestNews'
import discoveryIcon from '../assets/img/icons/discovery-icon.svg';
import uiuxIcon from '../assets/img/icons/uiux-icon.svg';
import engineeringIcon from '../assets/img/icons/engineering-icon.svg';
import insightsIcon from '../assets/img/icons/insights-icon.svg';
import adaptionIcon from '../assets/img/icons/adaptation-icon.svg';

export default ({pageContext, location}) => (

  <Layout 
    pageTitle={pageContext.node.title} 
    location={location.pathname} 
    pageRef={pageContext.node.template.templateName}
  >
  {console.log(pageContext)}
    
      <section class="grid-container-narrow pb0">

        <p class="lead lead-narrow">Our team of dedicated professionals align themselves with your particular business goals, creating digital development, brand strategy, and customer identity management solutions that take your brand where you want it to be.</p>

        <p class="lead lead-narrow">We deliver award-winning solutions that leverage our innovative vision, technical prowess, and unmatched customer service. By partnering with some of the world’s foremost technology leaders, we’re able offer only the most leading-edge technology and put them to work for you.</p>

        <div class="wp-intro-section">
          <Link class="wp-intro-section-button button" to={"/contact"}>Get Started</Link>
        </div>
        </section>

        <section class="grid-container-narrow pt0">
        <h2>How we work</h2>

        <p>Communications in today’s market is constantly evolving, and the need to connect with your audience is more important than ever. With robust technology, compelling creative, and targeted marketing strategies, we develop innovative solutions that engage customers and drive revenue.</p>

        <ul class="feature-blocks">
          <li class="feature-blocks-item" data-aos="animate-icon">
            <div class="feature-blocks-img-wrapper">
              <img class="feature-blocks-img" src={discoveryIcon} alt="Discovery icon" inject-svg aria-describedby="Discovery icon" />
            </div>
            <div class="feature-blocks-content">
              <h5 class="feature-blocks-title">Discovery</h5>
              <p class="feature-blocks-description">We work with your leaders and stakeholders to discover your business needs, wishes, and goals. Our holistic approach ensures that our solutions are customized to your brand, and are developed with your success in mind.</p>
            </div>
          </li>
          <li class="feature-blocks-item" data-aos="animate-icon">
            <div class="feature-blocks-img-wrapper">
              <img class="feature-blocks-img" src={uiuxIcon} alt="UI/UX icon" inject-svg aria-describedby="UI/UX icon" />
            </div>
            <div class="feature-blocks-content">
              <h5 class="feature-blocks-title">UI/UX</h5>
              <p class="feature-blocks-description">In tandem with your goals we identify through discovery, we apply creative conceptualization in design, function, and user experience to create beautiful, clear messages that your audience will respond to.</p>
            </div>
          </li>
          <li class="feature-blocks-item" data-aos="animate-icon">
            <div class="feature-blocks-img-wrapper">
              <img class="feature-blocks-img" src={engineeringIcon} alt="Engineering icon" inject-svg aria-describedby="Engineering icon" />
            </div>
            <div class="feature-blocks-content">
              <h5 class="feature-blocks-title">Engineering</h5>
              <p class="feature-blocks-description">Ideas are great, but they need to work. Our team of skilled developers engineer custom solutions compatible across multiple channels, platforms, and media, creating compelling brand experiences on the world’s most capable technologies.</p>
            </div>
          </li>
          <li class="feature-blocks-item" data-aos="animate-icon">
            <div class="feature-blocks-img-wrapper">
              <img class="feature-blocks-img" src={insightsIcon} alt="Insights icon" inject-svg aria-describedby="Insights icon" />
            </div>
            <div class="feature-blocks-content">
              <h5 class="feature-blocks-title">Insights</h5>
              <p class="feature-blocks-description">Collect more data, build rich, identity-based profiles, and turn unknown site visitors into loyal customers with our Customer Identity Management solutions. Our solutions help you build meaningful relationships with your audience, leading to better customer experiences, relevant, targeted messaging, and improved ROI on your marketing campaigns.</p>
            </div>
          </li>
          <li class="feature-blocks-item" data-aos="animate-icon">
            <div class="feature-blocks-img-wrapper">
              <img class="feature-blocks-img" src={adaptionIcon} alt="Adaptation icon" inject-svg aria-describedby="Adaptation icon" />
            </div>
            <div class="feature-blocks-content">
              <h5 class="feature-blocks-title">Adaptation</h5>
              <p class="feature-blocks-description">Things change quickly. If you can’t adapt to changing demands, market trends, and economic shifts, you could be left behind. We understanding the ever-changing trends in marketing, and our knowledge and expertise will keep your brand ahead of the rest and foremost in the minds of your customers.</p>
            </div>
          </li>
        </ul>
      </section>

      {pageContext.allPosts ? <LatestNews latestNews={pageContext.allPosts} /> : null}
    
  </Layout>
)
