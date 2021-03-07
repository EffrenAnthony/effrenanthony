import React from 'react';
import '../assets/styles/components/Techs.css'
import Component from './myComponent';

const Techs = () => {
  return (
    <section className="pt-5 pb-5" id='tech'>
      <h1 className="pt-2"><b>|Tecnologías</b></h1>
      <Component />
    </section>
  );
};

export default Techs;