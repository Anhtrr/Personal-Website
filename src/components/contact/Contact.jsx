import React, { useRef } from 'react'
import './contact.css'
import {SiGmail, SiWhatsapp, SiLinkedin} from 'react-icons/si'
import {BiMessageRounded} from 'react-icons/bi'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmmofli', 'template_tfsp1dr', form.current, 'iQuaU64D678ZE9D9G')
      .then((result) => {
          alert("You have successfully sent me an email! I will be sure to get back to your shortly!");
          console.log(result.text);
      }, (error) => {
          alert("Email failed to send! Please try again :( ");
          console.log(error.text);
      });
  };
  
  return (
    <section id='contact'>
      <h5 className='spacing'>CONTACT</h5>
      <h2>My Contact Information</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='iconn'/>
            <h4>Email</h4>
            <h5>Anhtrr7@gmail.com</h5>
            <a className='btn' href="mailto:anhtrr7@gmail.com" >Send Me An Email</a>
          </article>
          <article className="contact__option">
            <BiMessageRounded className='iconn'/>
            <h4>iMessage</h4>
            <h5>+1 (646)-477-5959</h5>
            <a className='btn' href="sms:16464775959?&body=Hey%20Anh%2C" target='_blank' rel="noreferrer">Send Me A Text</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='iconn'/>
            <h4>WhatsApp</h4>
            <h5>+84 901795688</h5>
            <a className='btn' href='https://api.whatsapp.com/send?phone=84901795688' target='_blank' rel="noreferrer">Send Me A Message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin className='iconn'/>
            <h4>LinkedIn</h4>
            <h5>Anhtrr</h5>
            <a className='btn' href='https://www.linkedin.com/in/anhtrr/' target='_blank' rel="noreferrer">Send Me A Message</a>
          </article>
          </div>
          <div className="formm">
            <h3>SEND ME A MESSAGE</h3>
            <form 
              ref={form}
              onSubmit={sendEmail}
            >
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <input type="subject" name='subject' placeholder='Subject' required/>
              <textarea name="message" id="7" placeholder='Your Message' cols="30" rows="10"></textarea>
              <button type='submit' className='btn btn-primary'>SEND MESSAGE</button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact