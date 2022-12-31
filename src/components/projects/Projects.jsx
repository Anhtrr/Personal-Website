import React from 'react';
import './projects.css';
import proj1 from '../../assets/proj1.png'

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
            target='_blank'>Github</a>
            <a href="https://resto-reviewers.herokuapp.com/" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Custom C Shell</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank'>Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>FAT32 Recovery</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank'>Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Recipe Book</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank'>Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>Multithread Encoding</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank'>Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={proj1} alt=''/>
          </div>
          <h3>FAT32 Recovery</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/Anhtrr" className='btn' 
            target='_blank'>Github</a>
            <a href="https://github.com/Anhtrr" className='btn btn-primary' 
            target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects