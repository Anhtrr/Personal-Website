import React from 'react';
import { useRef, useState } from "react";
import './photo.css';
import c1 from '../../assets/Curations/C1/main.jpeg'
import c2 from '../../assets/Curations/C2/main.JPG'
import c3 from '../../assets/Curations/C3/main.JPG'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Photo = () => {
  const collections = [
    {
      display: c2,
      title: '"Light and Smoke" • 2021',
      format: 'Small',
      style: 'Portraiture • Shadow • Fog',
      description: 'This collection of portraits was shot to explore how natural lighting can be utilized as photo objects themselves.'
    },
    {
      display: c1,
      title: '"Paris On Film" • 2022',
      format: 'Small',
      style: 'Portraiture',
      description: 'This collection of portraits was shot in Paris, France. It intends to bring out the dreamy and vibrant moods of Parisian Sceneries as well as the beauty of my friends.'
    },
    {
      display: c3,
      title: '"Motion" • 2019',
      format: 'Small, Medium',
      style: 'Long Exposure',
      description: 'This collection consists of all my attempts at long exposure. I attempt to capture the concept of motion, through photographs.'
    }
  ]
  
  return (
    <section id='photo'>
      <h5 className='spacing'>PHOTOGRAPHY</h5>
      <h2>My Photography Curations</h2>
      <Swiper className="container collections__container"
        // install Swiper modules
        spaceBetween={50}
        navigation={true}
        color="white"
        effect={"coverflow"}
        slidesPerView={2}
        grabCursor={true}
        centeredSlides={true}
        speed={"1s"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        rewind={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
      >
        {collections.map(({display, title, format, style, description}, index) =>{
          return(
            <SwiperSlide key={index} className="collection">
              <h3 className='picTitle'>{title}</h3>
              <div className="pic">
                <img className="picture" src={display} alt=""/>
              </div>
              <div className="picContent">
                <h4 className="label">Details</h4>
                <small className="picAttributes">
                  <ul>
                    <li>Format: {format}</li>
                    <li>Style: {style}</li>
                  </ul>
                </small>
                <h4 className="label">Description</h4>
                <small className="picDesc">{description}</small>
              </div>
            </SwiperSlide>
          )
        })}  
      </Swiper>
    </section>
  )
}

export default Photo