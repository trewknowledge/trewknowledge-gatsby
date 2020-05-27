import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #162636;
`

const FooterWrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  color: #fff;
`

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <span>Copyright TrewKnowledge</span>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer;
