import React from 'react';
import PortfolioItem from './PortfolioItem';
import { Icon} from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill';
const Portfolio = () => {

  const portfoliodata = [
    {
      id: 0,
      image: "https://live.staticflickr.com/65535/51010031331_a93b69b32c_h.jpg",
      title: "WeLivic: Plataforma de Educación Online",
      stack: ["React JS", "Firebase", "Node Js", "Strapi", "Mongo DB", "UX/UI"],
      links: [
        {
          type:"web",
          url:"https://welivic.vercel.app/"
        }
      ]
    },
    {
      id: 1,
      image: "https://live.staticflickr.com/65535/51010132152_65c5302a62_h.jpg",
      title: "FeedVP",
      stack: ["React JS", "Firebase", "Node Js", "UX/UI"],
      links: [
        {
          type:"web",
          url:"https://feedvp-front.vercel.app/"
        }
      ]
    },
    {
      id: 2,
      image: "https://live.staticflickr.com/65535/51010132112_f465934d83_k.jpg",
      title: "QuickId",
      stack: ["ReactJs", "Flutter", "Firebase", "Node Js", "UX/UI"],
      links: [
        {
          type:"iOS",
          url:"https://apps.apple.com/pe/app/quick-id/id1542493983"
        },
        {
          type:"android",
          url:"https://play.google.com/store/apps/details?id=com.proyecto_flutter.quick_id_app"
        },
        {
          type:"web",
          url:"https://quick-id-web.vercel.app/support"
        },
        {
          type:"ux/ui",
          url:"https://live.staticflickr.com/65535/51009406088_4114aaa9f2_h.jpg"
        },
      ]
    },
    {
      id: 3,
      image: "https://live.staticflickr.com/65535/51010031276_137ffd8248_h.jpg",
      title: "Parkin Perú",
      stack: ["ReactJs", "Node Js", "UX/UI"],
      links: [
        {
          type:"web",
          url:"https://parkinperu.com/"
        },
        {
          type:"ux/ui",
          url:"https://live.staticflickr.com/65535/51010158052_a0294006a3_c.jpg"
        },
      ]
    },
    {
      id: 4,
      image: "https://live.staticflickr.com/65535/51009323148_f5f914dcae_h.jpg",
      title: "iToour",
      stack: ["ReactJs", "Firebase", "UX/UI"],
      links: [
        {
          type:"web",
          url:"https://itoour.com/"
        },
      ]
    },
    {
      id: 5,
      image: "https://live.staticflickr.com/65535/51009411773_51a521019c_b.jpg",
      title: "Mr. Lucky",
      stack: ["Flutter", "UX/UI"],
      links: [
        {
          type:"android",
          url:"https://play.google.com/store/apps/details?id=com.evolutionsoluciones.MrLucky&hl=es&gl=US"
        },
      ]
    },
    {
      id: 6,
      image: "https://live.staticflickr.com/65535/51010132662_582d76d55f_h.jpg",
      title: "Avi Delivery",
      stack: ["ReactJs", "Node Js", "UX/UI"],
      links: [
        {
          type:"web",
          url:"https://avideliveryperu.com/"
        },
      ]
    },
    {
      id: 7,
      image: "https://live.staticflickr.com/65535/51009322758_2f716229d3_h.jpg",
      title: "VeraJPierre",
      stack: ["ReactJs", "Node Js", "DJango"],
      links: [
        {
          type:"web",
          url:"https://verajpierre.com/"
        },
      ]
    },
    {
      id: 8,
      image: "https://live.staticflickr.com/65535/51010131767_38cd3add82_h.jpg",
      title: "PooPaye SAC",
      stack: ["ReactJs", "Node Js", "UX/UI"],
      links: [
        {
          type:"web",
          url:"http://poopaye.com/"
        },
      ]
    },
    {
      id: 9,
      image: "https://live.staticflickr.com/65535/51010030516_97ce31f083_h.jpg",
      title: "Arequipa Free Tours",
      stack: ["HTML", "CSS", "JavaSacript"],
      links: [
        {
          type:"web",
          url:"https://free-tour-aqp.herokuapp.com/"
        },
      ]
    },
    {
      id: 10,
      image: "https://live.staticflickr.com/65535/51010111036_1cb9da64f7_c.jpg",
      title: "MidStay",
      stack: ["Figma", "UX/UI"],
      links: [
        {
          type:"ux/ui",
          url:"https://live.staticflickr.com/65535/51010111036_1cb9da64f7_c.jpg"
        },
      ]
    },
    {
      id: 11,
      image: "https://live.staticflickr.com/65535/51010110241_759688c004_b.jpg",
      title: "12eatfood",
      stack: ["AdobeXD", "UX/UI"],
      links: [
        {
          type:"ux/ui",
          url:"https://live.staticflickr.com/65535/51010110241_759688c004_b.jpg"
        },
      ]
    },
    
    
    

  ]
  return (
    <section className="pt-5 pb-5" id='portfolio'>
      <h1 className="pt-5 pb-5"><b>|Portafolio</b></h1>
      <div className="row">
        {
          portfoliodata.map((item:any, key:any) => (
            <div className="col-md-6 p-4" key={key}>
            <PortfolioItem image={item.image}
            title={item.title} stack={item.stack} 
            links={item.links}/>
            </div>
          ))
        }
      </div>
      <div className='text-center mt-5 mb-5'>
        <a className='btn btn-light pt-2 pb-2 pr-5 pl-5' href="https://github.com/EffrenAnthony" target="_blank" rel="noreferrer">
          <h4 style={{"margin":0}}>
            <b>
              Aun hay mas! <Icon icon={githubFill} style={{fontSize: '40px'}} />            
            </b>
          </h4>
        </a>
      </div>
      
    </section>
  );
};

export default Portfolio;