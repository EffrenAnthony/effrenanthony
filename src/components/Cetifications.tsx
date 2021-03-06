import React from 'react';
import tecsup from '../assets/static/tecsup.png'
import trepcamp from '../assets/static/trepcamp.png'
import pmi from '../assets/static/pmi.png'

const Cetifications = () => {

  const cetifications = [
    {
      id:0,
      img: tecsup,
      title: 'Desarrollo Móvil con Flutter',
      year: '2020'
    },
    {
      id:1,
      img: tecsup,
      title: 'Desarrollo Full Stack Web Javascript',
      year: '2019'
    },
    {
      id:2,
      img: trepcamp,
      title: 'TrepCamp Silicon Valley, UC Berkeley',
      year: '2018'
    },
    {
      id:3,
      img: pmi,
      title: 'Certified Asociated in Project Management (CAPM®)',
      year: '2017'
    },
  ]
  return (
    <section className="pt-5 pb-5">
      <h1 className="pb-5"><b>|Certificaciones</b></h1>
      {
        cetifications.map((item, key) => (
          <div className="row pt-2 pb-2" key={key}>
            <div className="col-md-6 text-center pt-2 pb-2">
              <img src={item.img} alt="certificate institute" height='100px'/>
            </div>
            <div className="col-md-6 pt-2 pb-2">
              <h5>{item.title}</h5>
              <p>{item.year}</p>
            </div>
          </div>
        ))
      }
      
    </section>
  );
};

export default Cetifications;