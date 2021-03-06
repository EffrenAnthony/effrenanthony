// import React from 'react';
import '../assets/styles/components/Experience.css';
import { Exp } from '../models/interfaces';
import poopaye from '../assets/static/poopaye.png';
import marquisa from '../assets/static/marquisa.png';
import gomez from '../assets/static/gomezIng.png';

const Experience = () => {

  const experience: Exp[] = [
    {
      id: 0, 
      position: "CEO y Desarrollador Web Mobil",
      title: "Desarrollador",
      company: "PooPaye SAC",
      date: "2017 - Presente",
      img: poopaye,
    },
    {
      id: 1, 
      position: "Asistente Lean Construction",
      title: "Ingeniero Civil",
      company: "Marquisa SAC",
      date: "2019",
      img: marquisa,
    },
    {
    id: 2, 
      position: "Costos y Presupuestos",
      title: "Ingeniero Civil",
      company: "Gomez Ingenieros",
      date: "2016 - 2017",
      img: gomez,
    },
  ];
  
  return (
    <section className="pt-5 pb-5">
      <h1><b>|Mi experiencia</b></h1>
      <div className="pr-5 pl-5 pb-5 pt-2 ">
        {/* <div className="col-md-6 "> */}
          {
            experience && (
              experience.map((item: Exp, key) => (
                <div key={key}>
                    <div className="d-flex align-items-center">
                      <h3 className='mt-3 mb-3 pb-4 pt-4'><u>{item.title}</u></h3>
                      <div style={{"width":"20px"}}></div>
                    {
                    item.title === 'Desarrollador' ?
                      <img src='https://img.icons8.com/cotton/2x/source-code--v2.png' alt="" height='40px'></img>
                      :
                      <img src='https://img.icons8.com/dusk/2x/engineer.png' alt="" height='40px'></img>
                    }
                    </div> 
                  <div className="row">
                    <div className="col-md-4 text-center pb-3 pt-3">
                      <img src={item.img} alt="" height='100px'/>
                    </div>
                    <div className="col-md-4 text-center  d-flex flex-column justify-content-center pb-3 pt-3">
                      <h4>{item.company}</h4>
                      <h6>{item.date}</h6>
                    </div>
                    <div className="col-md-4 text-center d-flex flex-column justify-content-center pb-3 pt-3">
                      <h4>{item.position}</h4>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        {/* </div>
        <div className="col-md-6 d-flex justify-content-center mt-3 mb-3">
        </div> */}
      </div>
    </section>
  );
};

export default Experience;