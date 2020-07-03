import React from 'react';
import tkLogo from '../images/logo-main.svg'
import wpVipLogo from '../images/wpvip-logo.svg'
import { Link, graphql, useStaticQuery } from 'gatsby'

import twitterLogo from '../assets/img/logos/twitter-logo.svg'
import facebookLogo from '../assets/img/logos/facebook-logo.svg'
import linkedinLogo from '../assets/img/logos/linkedin-logo.svg'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      wpgraphql {
        generalSettings {
          url
        }
        menus(where: {slug: "Footer Menu"}) {
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

  const { url } = data.wpgraphql.generalSettings; 
  const menuItems = data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, "")
  }));

  return (
  <div className="footer">
    <div className="footer-branding">
      <div>
        <Link to={"/"} className="footer-logo">
          <img src={tkLogo} alt="Trew Knowledge Logo"/>
          <span>Trew Knowledge</span>
        </Link>
        <a className="footer-branding-social" href="https://twitter.com/trewknowledge" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="twitter logo"/>
        </a>
        <a className="footer-branding-social" href="https://www.facebook.com/trewknowledge" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="facebook logo"/>
        </a>
        <a className="footer-branding-social" href="https://www.linkedin.com/company/1022792/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="linkedin logo"/>
        </a>
      </div>
      <a href="" className="hide-for-large">
        <img src={wpVipLogo} alt="WordPress VIP Logo"/>
      </a>
    </div>
    <div className="footer-links">
      <ul className="footer-links-menu vertical medium-horizontal menu">
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.url}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className="show-for-large">
          <Link to={"/wordpress-vip"}>
            <img src={wpVipLogo} alt="WordPress VIP Logo"/>
          </Link>
        </li>
      </ul>
      <div className="footer-links-menu-secondary">
        <span>© 2020 Trew Knowledge Inc.</span>
        <Link to={"/privacy-policy"} className="footer-links-menu-secondary-link">Privacy Policy</Link>
      </div>
    </div>
  </div>
  )
}

export default Footer;
