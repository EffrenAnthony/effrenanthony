import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarComponent from '../components/shared/NavBarComponent';
import Header from '../components/Header';
import Hello from '../components/Hello';

const Home = () => {
  return (
    <div>
      <Container>
        <NavBarComponent/>
        <Header/>
        <Hello />
      </Container>
    </div>
  );
};

export default Home;