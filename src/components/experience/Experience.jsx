import React from 'react';
import './experience.css';
import {BsCheck2, BsCheck2All} from 'react-icons/bs'
import {SiJavascript, SiCss3, SiHtml5, SiBootstrap, 
  SiReact, SiCplusplus, SiJava, SiPython, SiGoland, 
  SiVisualstudiocode, SiGithub, SiMongodb, SiNumpy, 
  SiPandas, SiGoogle, SiNodedotjs} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      
      <h5 className='spacing'>Skills</h5>
      <h2>My Coding Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiHtml5 className='experienceIcons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experienceIcons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experienceIcons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experienceIcons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experienceIcons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-End</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiJava className='experienceIcons' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCplusplus className='experienceIcons' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experienceIcons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNodedotjs className='experienceIcons' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>REST APIs</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Axios</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experienceIcons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGoland className='experienceIcons' />
              <div>
                <h4>GoLang</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__other">
          <h3>Tools & Libraries</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiVisualstudiocode className='experienceIcons' />
              <div>
                <h4>VSC</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGithub className='experienceIcons' />
              <div>
                <h4>Git Commands</h4>
                <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNumpy className='experienceIcons' />
              <div>
                <h4>Numpy</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPandas className='experienceIcons' />
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGoogle className='experienceIcons' />
              <div>
                <h4>Google BigQuery</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Matplotlib</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience