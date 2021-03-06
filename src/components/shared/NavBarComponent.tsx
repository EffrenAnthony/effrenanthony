import React, { useState } from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import "../../assets/styles/components/shared/NavBarComponent.css"
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
          <Navbar.Brand href="#home">{scrolling ? "Effren Anthony" : ""}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Acerca de mi</Nav.Link>
              <Nav.Link href="#link">Experiencia</Nav.Link>
              <Nav.Link href="#link">Estudios</Nav.Link>
              <Nav.Link href="#link">Tecnologías</Nav.Link>
              <Nav.Link href="#link">Certificaciones</Nav.Link>
              <Nav.Link href="#link">Portafolio</Nav.Link>
              <Button variant="light" className='ml-4'>Contáctame</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>

    </div>
  );
};

export default NavBarComponent;