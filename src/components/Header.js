import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Navigation from './Navigation'

const MainMenuContainer = styled.div`
  background-color: #162636;
  height: 50px;
  display: flex;
`

const MainMenuWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Hamburger = styled.div`
  display: block;
  height: 50px;
  color: #fff;
  border: 1px solid #fff;

  @media (min-width: 767px) {
    display: none;
  }
`

const Header = ({ handleMobileMenu }) => {
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
    <MainMenuContainer>
      <MainMenuWrapper className="grid-container">
        <Navigation data={data} />
        <Hamburger onClick={handleMobileMenu}>
          Click Me
        </Hamburger>
      </MainMenuWrapper>
    </MainMenuContainer>
  )
}

export default Header
