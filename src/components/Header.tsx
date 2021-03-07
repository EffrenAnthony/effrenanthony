import React from 'react';
import Typewriter from 'typewriter-effect';
import '../assets/styles/components/Header.css';
import headerImg from '../assets/static/headerImg.png'
import { Link as LinkS } from 'react-scroll';



const Header = () => {
  
  
  return (
    <section className="header-section pt-5 mb-5 pb-5">
      <div className="row pt-5 header-container">
        <div className="col-md-6 mt-3 mb-3 header__content--left">
          <div className="header-title">
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
          <div className='mt-3 mb-3 header__button'>
            {/* <button className='btn btn-light header__button'> */}
            <LinkS activeClass="activeButton" to="hello" spy={true} smooth={true} duration={500} className='btn btn-light header__button'>
              <b>!Hola!</b>
            </LinkS>
            {/* </button> */}
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column align-items-center mt-3 mb-3">
          <div className='header__img--container'>
            <img src={headerImg} alt="Effren Anthony in Google" className='header__img h-100'/>            
          </div> 
          <div className='row mt-4'>
            <div className='header-social col-md-4'>
              <a href="https://twitter.com/Etony27" target="_blank" rel="noopener noreferrer" className="header__icon--container">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className='header-social col-md-4'>
              <a href="https://github.com/EffrenAnthony" target="_blank" rel="noopener noreferrer" className="header__icon--container">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className='header-social col-md-4'>
              <a href="https://www.linkedin.com/in/effrenanthony/" target="_blank" rel="noopener noreferrer" className="header__icon--container">
              <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            </div>         
        </div>
      </div>
    </section>
  );
};

export default Header;