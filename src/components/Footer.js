import React from 'react';
import tkLogo from '../images/logo-main.svg'
import wpVipLogo from '../images/wpvip-logo.svg'
import { Link, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
        <a className="footer-branding-social" href="/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
        <a className="footer-branding-social" href="/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a className="footer-branding-social" href="/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      </div>
      <a href="" className="hide-for-large">
        <img src={wpVipLogo} alt="WordPress VIP Logo"/>
      </a>
    </div>
    <div className="footer-links">
      <ul className="footer-links-menu">
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
        <Link to={"/"} className="footer-links-menu-secondary-link" href="/">Privacy Policy</Link>
      </div>
    </div>
  </div>
  )
}

export default Footer;
