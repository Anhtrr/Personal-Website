import React from 'react';
import './about.css';
import ME from '../../assets/himemoji.png'
import {FaUniversity} from 'react-icons/fa'
import {FiBriefcase, FiCamera} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5 className='spacing'>About Me</h5>
      <h2>Anh D. Tran<h5>(Ah • ng)</h5></h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className='bruh'/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>NYU</h5>
              <small>Major: Computer Science <br/> Minor: Studio Art</small>
            </article>

            <article className='about__card'>
              <FiBriefcase className='about__icon'/>
              <h5>Work</h5>
              <small>1+ Year Professional Work Experience</small>
            </article>

            <article className='about__card'>
              <FiCamera className='about__icon'/>
              <h5>Photography</h5>
              <small>Freelance Analog and Digital Photography</small>
            </article>
          </div>

          <p>
            Hi, welcome to my Personal Website, it is nice to meet you! 
            My name is Anh, pronounced as "Ah • ng" (Yes, like the Avatar!). I grew up in Vietnam 
            and currently, I am a fourth year CS student @NYU Courant with specific interests
            in Full-Stack Development, Operating Systems, and Blockchain! During my undergraduate
            career, I have not only explored  both start-up and corporate work at multiple software
            companies, but also at software companies that specialize in FinTech and Blockchain.
            Apart from my interests in CS, I am also pursuing an undergraduate minor in Studio Art
            , which stems from my passion for Camera Collecting and Photography.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About