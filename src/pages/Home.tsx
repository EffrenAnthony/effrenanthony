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
      </Container>
    </div>
  );
};

export default Home;