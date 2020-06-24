import React from 'react';
import { homeLogosArray } from '../js/logos'

const SocialProofHome = () => (
  <section className="social-proof section-background-white">
    <div className="grid-x small-up-2 medium-up-4 grid-margin-x">
      {homeLogosArray.map((logo, id) => (
        <span className="social-proof-logo cell img-hover-link social-proof-logo-tall" key={id}>
          <img src={logo.img} alt={logo.altTag} />
        </span>
      ))}
    </div>
  </section>
)

export default SocialProofHome;
