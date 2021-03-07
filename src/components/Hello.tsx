import React from 'react';
// import helloImg from '../assets/static/helloImg.png';
import '../assets/styles/components/Hello.css'

const Hello = () => {

  return (
    <section className="pt-5" id='hello'>
      <h1 className="pt-2"><b>|Hola!</b></h1>
      <div className="row mb-5 mt-5">
        <div className="col-md-6 mb-5 mt-5 d-flex justify-content-center">
          <div className='hello__img--container' />
        </div>
        <div className="col-md-6">
          <p className="text-justify">Hola! Soy Anthony o Tony como me dicen mis amigos, voy a presentarme muy rapidamente en este espacio.</p>
          <p className="text-justify">Bueno comence estudiando ingeniería civil, me bachilleré e incluso me titule con felicitación publica y aunque me gustaba la ingeniería civil, al poco tiempo de salir me dí cuenta que mis pasiones eran otras.</p>
          <p className="text-justify">Y no hablo de la música o el deporte. Hablo del software y las Startups. Recuerdo haber leido sobre Silicon Valley y cómo allí iniciaban y crecían Startups como instagram, facebook o google, y bueno, me enamoré de ese mundo.</p>
          <p className="text-justify">Junté algunos amigos y les comenté de algunas ideas que tenía sobre negocios digitales en mi pais, de todos ellos solo uno me siguió y hoy en día es mi actual socio.</p>
          <p className="text-justify">Pronto me dí cuenta que para todos los proyectos que quería emprender, necesitaba poder crear mis propios productos, no queria depender de nadie. Es asi, y con una gran pasión a la tecnología, como empezó mi carrera como desarrollador de software.</p>
          <p className="text-justify">Mi primera linea de código para la WEB, la escribí en el 2018 gracias a Platzi, y desde entonces no he hecho mas que llevar cursos, bootcamps, incribirme a escuelas, incluso viajé a Silicon Valley y funde StartUps y empresas. Pero sobre todo,  ser 100% autodidacta para convertirme cada día en un mejor desarrollador de software y emprendedor de alto impacto.</p>
        </div>
      </div>
    </section>
  );
};

export default Hello;