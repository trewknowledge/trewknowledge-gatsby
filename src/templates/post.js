import React from 'react'
import Layout from '../components/layout';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Search from '../components/Search'

export default ({ pageContext }) => {

  const { localSearchPosts } = useStaticQuery(graphql`
    query localSearchPosts {
      localSearchPosts {
        index
        store
      }
    } 
  `)

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <h2>This is a standard post template</h2>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}/>

      <Search searchIndex={ localSearchPosts } />
      
      <Link to={`/`}>Back Home</Link>
    </Layout> 
  )
}

