import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import TkLogo from '../assets/img/svgs/logo-main.svg'
import WpVipLogo from '../assets/img/svgs/wpvip-logo.svg'
import TwitterLogo from '../assets/img/svgs/twitter-logo.svg'
import FacebookLogo from '../assets/img/svgs/facebook-logo.svg'
import LinkedinLogo from '../assets/img/svgs/linkedin-logo.svg'
import InstagramLogo from '../assets/img/svgs/instagram-logo.svg'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      allWpMenu(filter: {slug: {eq: "footer-menu"}}) {
        nodes {
          menuItems {
            nodes {
              label
              id
              path
            }
          }
        }
      }
    }
  `)

  const menuItems = data.allWpMenu.nodes[0].menuItems.nodes;

  return (
  <div className="footer">
    <div className="footer-branding">
      <div>
        <Link to={"/"} className="footer-logo" aria-label="Trew Knowledge Logo">
          <TkLogo alt="Trew Knowledge Logo" />
          <span>Trew Knowledge</span>
        </Link>
        <a className="footer-branding-social" href="https://twitter.com/trewknowledge" target="_blank" rel="noopener noreferrer" aria-label="twitter logo">
          <TwitterLogo alt="twitter logo"/>
        </a>
        <a className="footer-branding-social" href="https://www.facebook.com/trewknowledge" target="_blank" rel="noopener noreferrer" aria-label="facebook logo">
          <FacebookLogo alt="facebook logo"/>
        </a>
        <a className="footer-branding-social" href="https://www.linkedin.com/company/1022792/" target="_blank" rel="noopener noreferrer" aria-label="linkedin logo">
          <LinkedinLogo alt="linkedin logo"/>
        </a>
        <a className="footer-branding-social" href="https://www.instagram.com/trewknowledge/" target="_blank" rel="noopener noreferrer" aria-label="instagram logo">
          <InstagramLogo alt="instagram logo"/>
        </a>
      </div>
      <Link to="/wordpress-vip" className="hide-for-large" aria-label="To Wordpress VIP page">
        <WpVipLogo alt="WordPress VIP Logo"/>
      </Link>
    </div>
    <div className="footer-links">
      <ul className="footer-links-menu vertical medium-horizontal menu">
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className="show-for-large">
          <Link to={"/wordpress-vip"} className="linked-icon" aria-label="To Wordpress VIP page">
            <WpVipLogo alt="WordPress VIP Logo"/>
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
