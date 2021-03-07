import React, {useState} from 'react';
import {Form } from 'react-bootstrap';

import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import '../assets/styles/components/ContactMe.css'
import QuickId from '../assets/static/logoquickid.png'
import QrImg from '../assets/static/qr.PNG'

const ContactMe = () => {
  const [contMessage, setContMessage] = useState();
  const [contName, setContName] = useState();
  const [contSubject, setContSubject] = useState();
  const [contEmail, setContEmail] = useState();
  const succesAlert = () =>{
    document.getElementById("contactForm").reset();
    Swal.fire({
        icon: "success",
        title: 'Excelente!',
        text: 'Me pondré en contácto contigo lo antes posible.',
      // footer: 'Mantente atento a tu correo, te enviaremos una confirmación para la reunión que acabas de agendar'
    })
    }

    // const errorAlert = () => {
    // Swal.fire({
    //     icon:"error",
    //     title:'Oops',
    //     text:'Completa los campos por favor',
    //     footer:'Si el problema persiste probablemente sea tu conexión a internet, intentalo de nuevo mas tarde'
    //     })
    // }

    const loadingAlert = () => {
    Swal.fire({
        imageUrl : 'https://hawkeyestatic.s3.amazonaws.com/images/2cbb5e95b97aa2b496f6eaec84b9240d.gif',
        title:'Cargando...',
        imageWidth: 300,          
        text:'Un minuto por favor',
        showConfirmButton: false
    })
    }


  async function onSubmit (e) {
    e.preventDefault();
    await axios.post('https://effrenanthony.herokuapp.com/api/contact',{
    // await axios.post('http://localhost:3001/api/contact',{
      name: contName,
      email: contEmail,
      subject: contSubject,
      message: contMessage
    }).then(function (response) {
      // console.log(response);
      succesAlert()   
    }).catch((error)=>{
      // console.log(error);
    })   
  }
    const showAlert = () =>{   

      function alertEnviado() {
          if ((contName === '') || !(String(contEmail).includes('@')) || contEmail === '' || (contSubject  === '') || (contMessage  === '')) {   
              // errorAlert()       
          }else{          
              loadingAlert()
              
          }
      }
      return(
          alertEnviado()    
      )    
    } 
  return (
    <section className="pt-5 pb-5" id='contact'>
      <h1 className="pt-5 pb-3"><b>|Contáctame</b></h1>
      <h5>Déjame un mensaje en este formulario o si estas en Perú, puedes descargar {' '}
        <a href="https://apps.apple.com/pe/app/quick-id/id1542493983" target='_blank' rel='noreferrer'>
        <img src={QuickId} alt="logo quick id" height="50px"/>
        </a>y agregarme con este QR
      </h5>
      <div className="row">
        <div className="col-md-7">
        <Form 
          onSubmit={onSubmit} 
          id='contactForm'> 
          <div className="input-container">
              <TextField
                type="text" 
                placeholder="Escribe tu nombre completo" 
                onChange={(e)=>{setContName(e.target.value)}}
                name="name"
                value={contName}
                required
                label="Nombres Completos"
                fullWidth
                className="contact-input"
                variant="outlined"
              />
          </div>          
          <div className="input-container">
              <TextField
                label="Escribe tu email"
                fullWidth
                className="contact-input"
                type="email"
                variant="outlined"
                placeholder="Escribe tu email" 
                onChange={(e)=>{setContEmail(e.target.value)}}
                name="email"
                value={contEmail}
                required
              />
          </div>          
          <div className="input-container">
              <TextField
                label="Escribe un asunto"
                fullWidth
                className="contact-input"
                type="text"
                variant="outlined"
                placeholder="Escribe un asunto" 
                onChange={(e)=>{setContSubject(e.target.value)}}
                name="subject"
                value={contSubject}
                required
              />
          </div>          
          <div className="input-container">
              <TextField
                label="Escribe tu mensaje"
                fullWidth
                className="contact-input"
                type="text"
                variant="outlined"
                multiline
                rows={7}
                style={{color:'black'}}
                placeholder="Escribe tu mensaje" 
                onChange={(e)=>{setContMessage(e.target.value)}}
                name="message"
                value={contMessage}
                required
                />
          </div>          
          <div className='contact-button mt-4'>  
                    <Button variant="contained" color="secondary" type="submit"  onClick={showAlert}>
                    <h4 className='pt-1 pb-1 pr-5 pl-5'><b>Enviar</b></h4>
                    </Button>        
                </div>
          </Form>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center mt-4">
          <img src={QrImg} className="fluid" width="350px" alt='' style={{borderRadius:"20px"}}/>
          
        </div>
      </div>
    </section>
  );
};

export default ContactMe;