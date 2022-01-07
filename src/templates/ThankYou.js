import React from "react"
import Layout from "../components/layout"

const ThankYou = ({pageContext, location}) => (
  <Layout 
    pageTitle={"Trew Knowledge"} 
    location={location.pathname} 
    headerStyle={pageContext.headerStyle}
    pageContext={pageContext}
  >
    <div className="grid-container-narrow pt0 pb0 text-center">
      <h1>Thank You!</h1>
      <p>Your form submission has been received.</p>
    </div>
  </Layout>
)

export default ThankYou;
