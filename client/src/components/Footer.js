import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container fluid>
        <img className='footer-image'src="./racoon_footer.png" alt="racoon-footer" />
      </Container>
    </footer>
  );
};

export default Footer;