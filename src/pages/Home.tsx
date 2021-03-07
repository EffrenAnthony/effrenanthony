import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarComponent from '../components/shared/NavBarComponent';
import Header from '../components/Header';
import Hello from '../components/Hello';
import Experience from '../components/Experience';
import Studies from '../components/Studies';
import Techs from '../components/Techs';
// import Componente from '../components/myComponent';
import Cetifications from '../components/Cetifications';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import FooterComponent from '../components/shared/FooterComponent';

const Home = () => {
  return (
    <div>
      <Container>
        <NavBarComponent/>
        <Header/>
        <Hello />
        <Experience />
        <Studies />
        <Techs />
        {/* <Componente /> */}
        <Cetifications />
        <Portfolio />
        <ContactMe />
        <FooterComponent />
      </Container>
    </div>
  );
};

export default Home;