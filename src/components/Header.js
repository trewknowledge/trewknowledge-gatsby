import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import tkLogo from '../images/logo-main.svg'

const Header = ({ handleMenu }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      wpgraphql {
        generalSettings {
          url
        }
        menus(where: {slug: "Main Menu"}) {
          nodes {
            menuItems {
              nodes {
                url
                label
                id
              }
            }
          }
        }
      }
    }
  `)

  return(
    <header className="header">
      <div className="grid-container header-wrapper">
        <div className="nav-logo">
          <a href="#">
            <img src={tkLogo} alt="Trew Knowledge Logo"/>
          </a>
        </div>
        <button className="hamburger-button" onClick={handleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
