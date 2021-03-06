import React from 'react';
// import helloImg from '../assets/static/helloImg.png';
import '../assets/styles/components/Hello.css'

const Hello = () => {

  return (
    <section>
      <h1><b>|Hola!</b></h1>
      <div className="row mb-5 mt-5">
        <div className="col-md-6 mb-5 mt-5">
          <div className='hello__img--container' />
        </div>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur adipisci suscipit asperiores voluptatem quisquam quas, blanditiis ipsa sapiente esse facilis. In distinctio provident consequatur veritatis facere dolores a labore.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur adipisci suscipit asperiores voluptatem quisquam quas, blanditiis ipsa sapiente esse facilis. In distinctio provident consequatur veritatis facere dolores a labore.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur adipisci suscipit asperiores voluptatem quisquam quas, blanditiis ipsa sapiente esse facilis. In distinctio provident consequatur veritatis facere dolores a labore.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur adipisci suscipit asperiores voluptatem quisquam quas, blanditiis ipsa sapiente esse facilis. In distinctio provident consequatur veritatis facere dolores a labore.</p>
        </div>
      </div>
    </section>
  );
};

export default Hello;