import React, { useState } from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import "../../assets/styles/components/shared/NavBarComponent.css"
import { Link as LinkS} from 'react-scroll'

const NavBarComponent = () => {
  const [scrolling, setScrolling] = useState(false)
  window.addEventListener('scroll', function(){    
    if (window.scrollY > 80) {
      setScrolling(true)      
    }else{
      setScrolling(false)
    }
  })
  
  return (
    <div className='fixed-top'>
      <div className={scrolling ? "navbar-container-scroll" : "navbar-container"}>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkS activeClass="active" to="header" spy={true} smooth={true} duration={500} className='p-2' id='nav-brand'>
            {scrolling ? <b>Effren Anthony</b>  : ""}
          </LinkS>
          {/* <Navbar.Brand href="#home">{scrolling ? <b>Effren Anthony</b>  : ""}</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-elements-container">
              <LinkS activeClass="active" to="hello" spy={true} smooth={true} duration={500} className='p-2'>
                  Acerca de mi
              </LinkS>
              <LinkS activeClass="active" to="expertice" spy={true} smooth={true} duration={500} className='p-2'>
                  Experiencia
              </LinkS>
              <LinkS activeClass="active" to="studies" spy={true} smooth={true} duration={500} className='p-2'>
                  Estudios
              </LinkS>
              <LinkS activeClass="active" to="tech" spy={true} smooth={true} duration={500} className='p-2'>
                  Tecnologías
              </LinkS>
              <LinkS activeClass="active" to="certifications" spy={true} smooth={true} duration={500} className='p-2'>
                  Certificaciones
              </LinkS>
              <LinkS activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} className='p-2'>
                  Portafolio
              </LinkS>
              <Button variant="light" className='ml-4 navButton' style={{color:'black'}}>
                <LinkS activeClass="activeButton" to="contact" spy={true} smooth={true} duration={500} className=''>
                    Contáctame
                </LinkS>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>

    </div>
  );
};

export default NavBarComponent;