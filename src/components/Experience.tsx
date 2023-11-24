// import React from 'react';
import '../assets/styles/components/Experience.css';
import { Exp } from '../models/interfaces';
// import poopaye from '../assets/static/poopaye.png';
import marquisa from '../assets/static/marquisa.png';
import gomez from '../assets/static/gomezIng.png';

const Experience = () => {

  const experience: Exp[] = [
    {
      id: 5, 
      position: "CEO y Desarrollador Fullstack",
      title: "CEO - Desarrollador",
      company: "Bable",
      date: "2017 - Presente",
      img: "https://bable-cms.onrender.com/media/bable-logo-primary.png",
    },
    {
      id: 0, 
      position: "Web UI Developer",
      title: "UX Engineer",
      company: "Salesforce",
      date: "2023 - Presente",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png',
    },
    {
      id: 2, 
      position: "Frontend Engineer",
      title: "Frontend Engineer",
      company: "Express",
      date: "2022",
      img: 'https://statics.globant.com/production/public/2022-08/globant-logo.jpg',
    },
    {
      id: 0, 
      position: "Web UI Developer",
      title: "UX Engineer",
      company: "Salesforce",
      date: "2023 - Presente",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png',
    },
    {
      id: 1, 
      position: "Frontend Engineer",
      title: "Frontend Engineer",
      company: "Erns & Young",
      date: "2023",
      img: 'https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/webcast/ey-logo-black.jpg',
    },
    {
      id: 3, 
      position: "Frontend Engineer",
      title: "Frontend Engineer",
      company: "Express",
      date: "2021",
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Express_Clothing_Logo.SVG/2560px-Express_Clothing_Logo.SVG.png',
    },
    {
      id: 4, 
      position: "Web UI Developer",
      title: "Web UI Developer",
      company: "Mad Mobile",
      date: "2021 - Presente",
      img: 'https://events.nrf.com/annual2024/Custom/BPCompanyLogos/MadMobile_400x400_155309.png',
    },
    {
      id: 6, 
      position: "Software Egineer",
      title: "Frontend Developer",
      company: "Zoluxiones",
      date: "2021 - 2021",
      img: 'https://ii.ct-stc.com/3/logos/empresas/2020/05/27/2d75be4caf864ff995c5131427708thumbnail.jpg',
    },
    {
      id: 7, 
      position: "Asistente Lean Construction",
      title: "Ingeniero Civil",
      company: "Marquisa SAC",
      date: "2019",
      img: marquisa,
    },
    {
    id: 8, 
      position: "Costos y Presupuestos",
      title: "Ingeniero Civil",
      company: "Gomez Ingenieros",
      date: "2016 - 2017",
      img: gomez,
    },
  ];
  
  return (
    <section className="pt-5 pb-5" id='expertice'>
      <h1 className='pt-2'><b>|Mi experiencia</b></h1>
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
                    item.title !== 'Ingeniero Civil' ?
                      <img src='https://img.icons8.com/cotton/2x/source-code--v2.png' alt="" height='40px'></img>
                      :
                      <img src='https://img.icons8.com/dusk/2x/engineer.png' alt="" height='40px'></img>
                    }
                    </div> 
                  <div className="row">
                    <div className="col-md-4 text-center pb-3 pt-3">
                      <img src={item.img} alt="" height='100px'className='bg-white' style={{borderRadius:'10px'}}/>
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