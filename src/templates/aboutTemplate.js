import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import LatestNews from '../components/LatestNews'

export default ({pageContext, location}) => (

  <Layout 
    pageTitle={pageContext.node.title} 
    location={location.pathname} 
    pageRef={pageContext.node.template.templateName}
  >
  {console.log(pageContext)}
    <div className="grid-container-narrow">
      
        
      <p className="lead lead-narrow">Our team of dedicated professionals align themselves with your particular business goals, creating digital development, brand strategy, and customer identity management solutions that take your brand where you want it to be.</p>

      <p className="lead lead-narrow">We deliver award-winning solutions that leverage our innovative vision, technical prowess, and unmatched customer service. By partnering with some of the world’s foremost technology leaders, we’re able offer only the most leading-edge technology and put them to work for you.</p>

      <Link className="button" to={"/contact"}>Get Started</Link>

    </div>

    {pageContext.allPosts ? <LatestNews latestNews={pageContext.allPosts} /> : null}
  </Layout>
)
