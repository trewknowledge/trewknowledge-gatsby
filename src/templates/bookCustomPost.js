import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby'

export default ({ pageContext }) => {

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <h2>This is a custom post template</h2>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}/>
      <Link to={`/`}>Back Home</Link>
    </Layout> 
  )
}

