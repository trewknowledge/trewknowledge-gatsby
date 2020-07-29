import React from "react"
import Layout from "../components/layout"

const ThankYou = ({pageContext, location}) => (
  <Layout 
    pageTitle={"Trew Knowledge"} 
    location={location.pathname} 
  >
    <div className="grid-container-narrow">
      <h1>Form Submitted</h1>
      <p>Thank you for your submission!</p>
    </div>
  </Layout>
)

export default ThankYou
