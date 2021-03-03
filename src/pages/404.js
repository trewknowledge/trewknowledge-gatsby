import React from "react"

import Layout from "../components/layout"

const NotFoundPage = ({pageContext, location}) => (
  <Layout 
    pageTitle={"Trew Knowledge"} 
    location={location.pathname} 
    headerStyle={'white'}
  >
    <div className="grid-container-narrow pt0 pb0 text-center">
      <h1>Oops! That page can’t be found.</h1>
      <p>It looks like nothing was found at this location.</p>
    </div>
  </Layout>
)

export default NotFoundPage
