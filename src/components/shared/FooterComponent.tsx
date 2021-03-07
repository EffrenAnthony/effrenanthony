import React from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import '../../assets/styles/components/shared/FooterComponent.css'

const FooterComponent = () => {
  return (
    <div>
      <footer className='footer-container'>
        <Container>
          <div className='footer-info-container  pt-5'>
          </div>
          <Row className='footer-terms-social'>
              <Col md='7' className='footer-copy'>
                <p>&copy; {new Date().getFullYear()} Copyright: EffrenAnthony, Todos los derechos reservados</p>
              </Col>
              <Col md='5' className="social-contanier">
                <Row>
                  <Col md='4' className='footer-social'>
                    <a href="https://twitter.com/Etony27" target="_blank" rel="noopener noreferrer" className="footer__icon--container">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Col>
                  <Col md='4' className='footer-social'>
                    <a href="https://github.com/EffrenAnthony" target="_blank" rel="noopener noreferrer" className="footer__icon--container">
                      <i className="fab fa-github"></i>
                    </a>
                  </Col>
                  <Col md='4' className='footer-social'>
                    <a href="https://www.linkedin.com/in/effrenanthony/" target="_blank" rel="noopener noreferrer" className="footer__icon--container">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Col>
                  {/* <Col md='3'  className='footer-links-terms'>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" > Subir </a>
                  </Col>
                  <Col md='3' className='footer-links-terms'>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" > Politicas </a>
                  </Col> */}
                </Row>
              </Col>              
            </Row>
            <div className="footer-copyright text-center pt-2">
                    <Container fluid>                        
                        <div className="d-flex justify-content-center poopayeLink">
                            <p>Diseñado y Desarrollado con <i className="fas fa-heart"/> y <i className="fas fa-mug-hot"/> por
                                <a href="https://github.com/EffrenAnthony" target="_blank" rel="noopener noreferrer"> EffrenAnthony </a>
                            </p>
                        </div>
                    </Container>
                </div>
        </Container>
      </footer>
    </div>
  );
};

export default FooterComponent;