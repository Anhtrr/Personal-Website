import React from 'react';
import './projects.css';
import proj1 from '../../assets/proj1.png'
import proj3 from '../../assets/proj3.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5 className='spacing'>PROJECTS</h5>
      <h2>My Coding Projects</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Restaurant Reviewers</h3>
          <h6>Full-stack (MERN) • Mapbox API • Axios</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr/Restaurant-Reviewer.git" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://resto-reviewers.herokuapp.com/" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Custom C Shell</h3>
          <h6>C • Linux • Multi-Process • OS • Signals • I/O • Pipes</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj3} alt=''/>
          </div>
          <h3>Personal Website</h3>
          <h6>Front-End • React • Javascript • HTML • CSS</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Recipe Book</h3>
          <h6>Java • OOP • Parsing • Local</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Multithread Encoding</h3>
          <h6>POXIS • Multi-threading • Thread Pool • C • IPC</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>File Recovery Tool</h3>
          <h6>C • File Systems • FAT32 • Linux • OS</h6>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects