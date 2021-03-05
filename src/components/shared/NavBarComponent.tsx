import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>

    </div>
  );
};

export default NavBarComponent;