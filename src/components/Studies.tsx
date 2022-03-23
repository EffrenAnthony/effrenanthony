import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Study } from "../models/interfaces";
import lasalle from "../assets/static/lasalle.png";
import ucsm from "../assets/static/ucsm.png";
import pucp from "../assets/static/pucp.png";
import trepcamp from "../assets/static/trepcamp.png";
import berkeley from "../assets/static/berkeley.png";
import platzi from "../assets/static/platzi.png";
import tecsup from "../assets/static/tecsup.png";
import eobs from "../assets/static/eobs.png";
import reyjuancarlos from "../assets/static/reyjuancarlos.png";
import mit from "../assets/static/mit.png";
import yc from "../assets/static/yc.png";

const Studies = () => {
  const studies: Study[] = [
    {
      id: 0,
      year: "2011",
      content: [
        {
          id: 0,
          year: "2011",
          grade: "Escuela Secundaria",
          study_center: "Colegio de la Salle Arequipa",
          imgs: [lasalle],
        },
      ],
    },
    {
      id: 1,
      year: "2016",
      content: [
        {
          id: 0,
          year: "2016",
          grade: "Ingeniería Civil",
          study_center: "Universidad Católica de Santa María",
          imgs: [ucsm],
        },
      ],
    },
    {
      id: 2,
      year: "2017",
      content: [
        {
          id: 0,
          year: "2017",
          grade: "Diplomado en Gestión de Proyectos PMI",
          study_center: "Pontificia Universidad Católica del Perú",
          imgs: [pucp],
        },
      ],
    },
    {
      id: 3,
      year: "2018",
      content: [
        {
          id: 0,
          year: "2018",
          grade: "Entrepreneurial Simulator Silicon Valley",
          study_center: "TrepCamp® & UC Berkeley",
          imgs: [trepcamp, berkeley],
        },
        {
          id: 1,
          year: "2018 - Presente",
          grade: "Desarrollo de Software",
          study_center: "Platzi",
          imgs: [platzi],
        },
      ],
    },
    {
      id: 4,
      year: "2019",
      content: [
        {
          id: 0,
          year: "2019",
          grade: "Desarrollo Full Stack Web",
          study_center: "TECSUP",
          imgs: [tecsup],
        },
        {
          id: 1,
          year: "2019",
          grade:
            "Master en Alta dirección Empresarial (MBA) | Titulo de experto en gestión de proyectos de construcción | Titulo de Experto en empresa familiar",
          study_center:
            "European Open Business School & Universidad Rey Juan Carlos",
          imgs: [eobs, reyjuancarlos],
        },
        {
          id: 2,
          year: "2019",
          grade: "ThinkUp! Programa de Pre-Incuvación de Startups",
          study_center: "TrepCamp®",
          imgs: [trepcamp],
        },
      ],
    },
    {
      id: 5,
      year: "2020",
      content: [
        {
          id: 0,
          year: "2020",
          grade: "Desarrollo Móvil con Flutter",
          study_center: "TECSUP",
          imgs: [tecsup],
        },
        {
          id: 1,
          year: "2020",
          grade:
            "Transformación Digital: Tecnologías y sus aplicaciones prácticas",
          study_center: "MIT Professional education",
          imgs: [mit],
        },
        {
          id: 2,
          year: "2020",
          grade: "Diplomado Emprendedor",
          study_center: "TrepCamp®",
          imgs: [trepcamp],
        },
        {
          id: 3,
          year: "2020",
          grade: "Startup School for future founders",
          study_center: "Y Combinator",
          imgs: [yc],
        },
        {
          id: 4,
          year: "2020",
          grade:
            "Titulo de experto en creatividad, innovación y emprendimiento",
          study_center: "European Open Business School",
          imgs: [eobs],
        },
      ],
    },
    {
      id: 5,
      year: "2021",
      content: [
        {
          id: 0,
          year: "2021",
          grade: "Professional Certificate in Coding: Full Stack Development with MERN",
          study_center: "Massachusetts Institute of Technology (MITxPro)",
          imgs: [mit],
        },
      ],
    },
  ];

  return (
    <section className="pt-5 pb-5" id="studies">
      <h1 className="pt-2">
        <b>|Estudios</b>
      </h1>
      <Timeline align="alternate">
        {studies.map((item, key) => (
          <TimelineItem key={key}>
            <TimelineOppositeContent>
              {/* <Typography color="inherit"><h4><b>{item.year}</b></h4></Typography> */}
              <h4>
                <b>{item.year}</b>
              </h4>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {item.content.map((contentItem, key) => (
                <div className="row" key={key}>
                  <div className="col-md-6">
                    <h6>
                      <b>{contentItem.grade}</b>
                    </h6>
                    <h6>{contentItem.study_center}</h6>
                    <p>{contentItem.year}</p>
                  </div>
                  <div className="col-md-6">
                    {contentItem.imgs.map((contentImgs, key) => (
                      <img key={key} src={contentImgs} alt="" height="70px" />
                    ))}
                  </div>
                </div>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Studies;
