import React from "react"

import Layout from "../components/layout"

const NotFoundPage = ({location}) => (
  <Layout 
    pageTitle={"404"} 
    location={location.pathname} 
  >
    <div className="grid-container-narrow">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
