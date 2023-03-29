import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './photo.css'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import AllCollections from '../../assets/PhotoII data/AllCollections'
import AllPhotos from '../../assets/PhotoII data/AllPhotos'


const Photo = () => {
  const [collections, setCollections] = useState([])
  
  useEffect(() => {
    const getCollections = () => {
      const thisCollectionSet = AllCollections
      thisCollectionSet.forEach(collection => {collection.displayPath = `/Collections/${collection.title.trim()}/Display.JPG`})
      thisCollectionSet.forEach(collection => {collection['photos'] = AllPhotos.filter(photo => photo.collection === collection.id)})
      setCollections(thisCollectionSet)
    }
    getCollections()
  }, [])
  
  return (
    <section className='photosec' id='photo'>
      <h5 className='spacing'>PHOTOGRAPHY FOR NON-MAJORS II</h5>
      <h2>My Collections</h2>
      <div className="PhotoII_button_set">
        <Link to={"/Photography/PhotoII/Journal"} className="btn">
          Journal Entries
        </Link>
        <Link to={"/Photography/PhotoII/Photos"} className="btn btn-primary">
          All Photos
        </Link>
      </div>
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
          delay: 6000,
          disableOnInteraction: true,
        }}
        rewind={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
      >
        {collections && collections.map((collection, index) =>{
          return(
            <SwiperSlide key={index+1} className="collection">
              <h3 className='picTitle'>{collection.title}</h3>
              <div className="pic">
                <Link to={`/Photography/PhotoII/Photos/${collection.title}`}><img className="picture" src={collection.displayPath} alt=""/></Link>
              </div>
              <div className="picContent">
                <h4 className="label">Description</h4>
                <small className="picDesc">{collection.description}</small>
              </div>
            </SwiperSlide>
          )
        })}  
      </Swiper>
    </section>
  )
}

export default Photo