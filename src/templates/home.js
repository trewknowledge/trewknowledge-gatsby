import React from 'react';
import Layout from '../components/layout'
// import { Link, graphql } from 'gatsby';

// in the props we have access to the context from the node file
export default ({ pageContext }) => {
 
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <h2>This is the Homepage custom template</h2>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content}}/>
      <h3>WP default posts</h3>
      <hr/>
      <h3>Custom Posts</h3>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         node {
//           id
//           title
//           slug
//         }
//       }
//     }
//   }
// `
