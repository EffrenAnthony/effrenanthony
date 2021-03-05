import React from 'react';
import Typewriter from 'typewriter-effect';
import '../assets/styles/components/Header.css';
import headerImg from '../assets/static/headerImg.png'

const Header = () => {
 
  
  return (
    <section className="header-section pt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-md-6 mt-3 mb-3 header__content--left">
          <div>
            <h1><strong>Effren Anthony</strong></h1>
            <h1>Peña Sánchez</h1>
          </div>
          <Typewriter
            onInit={() => {}}
            options={{
              strings: ['Emprendedor', 'Desarrollador', 'Diseñador UX/UI', 'Ingeniero Civil'],
              autoStart: true,
              loop: true,
            }}
          />
          <div className='mt-3 mb-3'>
            <button className='btn btn-light header__button'><b>Conóceme</b></button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center mt-3 mb-3">
          <div className='header__img--container'>
            <img src={headerImg} alt="Effren Anthony in Google" className='header__img h-100'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;