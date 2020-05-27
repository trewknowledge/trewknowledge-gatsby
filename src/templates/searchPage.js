import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Search from '../components/search'

export default () => {
  // const { siteSearchIndex }  = useStaticQuery(graphql`
  //   query SearchQuery {
  //     siteSearchIndex {
  //       index
  //     }
  //   }
  // `)

  return (
    <Layout>
      <h1>Search</h1>
      {/* <Search searchIndex={siteSearchIndex.index}/> */}
    </Layout>
  )
}
