import React from 'react';
import './skills.css';
import {BsCheck2, BsCheck2All} from 'react-icons/bs'
import {SiJavascript, SiCss3, SiHtml5, SiBootstrap, 
  SiReact, SiCplusplus, SiJava, SiPython, SiGoland, 
  SiVisualstudiocode, SiGithub, SiMongodb, SiNumpy, 
  SiPandas, SiGoogle, SiNodedotjs, SiAdobelightroom,
  SiAdobephotoshop, SiAngularjs, SiGooglechrome, 
  SiConfluence, SiJirasoftware, SiSlack} 
  from 'react-icons/si'

const Skills = () => {
  return (
    <section id='skills'>
      
      <h5>SKILLS</h5>
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
                <h4>ReactJS</h4>
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
            <article className='experience__details'>
              <SiAngularjs className='experienceIcons' />
              <div>
                <h4>AngularJS</h4>
                <small className='text-light'>Proficient</small>
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

        <div className="experience__tools">
          <h3>Tools</h3>
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
              <SiSlack className='experienceIcons' />
              <div>
                <h4>Slack</h4>
                <small className='text-light'>Fluent</small>
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
              <SiGooglechrome className='experienceIcons' />
              <div>
                <h4>Chrome Extension</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiConfluence className='experienceIcons' />
              <div>
                <h4>Confluence Wiki</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJirasoftware className='experienceIcons' />
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__other">
          <h3>Libraries</h3>
          <div className="experience__content">
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
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Matplotlib</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>

      </div>
      
      <h2 className='spacing'>My Photography Skills</h2>
      <div className="container experience__container">
        <div className="experience__analog">
          <h3>Analog / Film</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>B&W Film</h4>
                <small className='text-light'>5+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Color Film</h4>
                <small className='text-light'>5+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Small Format</h4>
                <small className='text-light'>5+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Medium Format</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Film Developing</h4>
                <small className='text-light'>2+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Film Printing</h4>
                <small className='text-light'>2+ Years</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__digital">
          <h3>Digital</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>DSLR</h4>
                <small className='text-light'>5+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Mirrorless</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Manual Exposure</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Long Exposure</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience__general">
          <h3>General</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Portraiture</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Composition</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Lighting Setup</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Manual Focus</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Post Production</h4>
                <small className='text-light'>5+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Scenery</h4>
                <small className='text-light'>3+ Years</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__software">
          <h3>Software / Equipment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiAdobephotoshop className='experienceIcons' />
              <div>
                <h4>Adobe Photo</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobelightroom className='experienceIcons' />
              <div>
                <h4>Adobe Lightroom</h4>
                <small className='text-light'>2+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Fixed Lenses</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Tri-pod</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2All className='experienceIcons' />
              <div>
                <h4>Studio Lighting</h4>
                <small className='text-light'>4+ Years</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experienceIcons' />
              <div>
                <h4>Zoom Lenses</h4>
                <small className='text-light'>3+ Years</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills