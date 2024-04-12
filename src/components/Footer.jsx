import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 KV_Market. Все права защищены.</p>
    </FooterContainer>
  );
};

export default Footer;
