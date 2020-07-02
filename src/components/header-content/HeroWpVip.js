import React from 'react';
import wpVipLogo from '../../assets/img/logos/wp-vip-cert-logo.svg'

export default() => (
  <>
    <img className="hero-cert-img" inject-svg src={wpVipLogo} alt="WordPress VIP logo" />
    <h1 className="hero-title">Power your digital experiences with the platform trusted by the world's top brands.</h1>
    <p className="lead"></p>
    <p className="hero-date"></p>
  </>
)
