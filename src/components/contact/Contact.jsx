import React from 'react';
import './contact.css';
import {SiGmail, SiWhatsapp, SiLinkedin} from 'react-icons/si'
import {BiMessageRounded} from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5 className='spacing'>CONTACT</h5>
      <h2>My Contact Information</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail/>
            <h4>Email</h4>
            <h5>Anhtrr7@gmail.com</h5>
            <a href="mailto:anhtrr7@gmail.com">Send Me An Email</a>
          </article>
          <article className="contact__option">
            <BiMessageRounded/>
            <h4>iMessage</h4>
            <h5>+1 (646)-477-5959</h5>
            <a href="iMessage://6464775959">Send Me A Text</a>
          </article>
          <article className="contact__option">
            <SiLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Anhtrr</h5>
            <a href='https://www.linkedin.com/in/anhtrr/' target='_blank' rel="noreferrer">Send Me A Message</a>
          </article>

          <form action="">

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact