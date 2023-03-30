import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import AllCollections from '../../assets/PhotoII data/AllCollections'
import AllPhotos from '../../assets/PhotoII data/AllPhotos'
import './gallery.css'

const Gallery = () => {
  const getCollectionTitle = useParams()
  const collectionTitle = getCollectionTitle.Collection
  const [collection, setCollection] = useState({})
  const [photos, setPhotos] = useState([])
  const [viewActive, setActive] = useState(false)
  const [activePhoto, setActivePhoto] = useState("")
  
  useEffect(() => {
    const getCollectionPhotos = () => {
      if(collectionTitle){
        const collectionFind = AllCollections.find(collection => collection.title === collectionTitle)
        const photosFind = AllPhotos.filter(photo => photo.collection === collectionFind.id)
        setCollection(collectionFind)
        setPhotos(photosFind)
      }
      else{
        const collectionFind = {
            id: 0,
            description: "Photography II for Non-Majors",
            title: "All Photos"
        }
        const getAllPhotos = AllPhotos
        setCollection(collectionFind)
        setPhotos(getAllPhotos)
      }
    }
    getCollectionPhotos()
  }, [])
  
  const handleClick = (index) => {
    setActivePhoto(index)
    setActive(true)
  }
  const handleCloseView = () => {
    setActivePhoto("")
    setActive(false)
  }
  const handleNextClick = () => {
    if(activePhoto === photos.length-1){
        setActivePhoto(0)
    }
    else{
        const newActive = activePhoto+1
        setActivePhoto(newActive)
    }
  }
  const handlePrevClick = () => {
    if(activePhoto === 0){
        setActivePhoto(photos.length-1)
    }
    else{
        const newActive = activePhoto-1
        setActivePhoto(newActive)
    }
  }

  return (
    <section className='photoIIGallery'>
        {viewActive === false && (
            <div>
            {collection && (
                <>
                    <div className="headingss">
                        {collection.title === "All Photos" && (
                            <h1 className='titlee'>{collection.title}</h1>
                        )}
                        {collection.title !== "All Photos" && (
                            <h1 className='titlee'>"{collection.title}"</h1>
                        )}
                        <h4 className='descriptionn'>{collection.description}</h4>
                    </div>
                    <div style={{paddingTop: '2rem', paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '2rem'}}>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        >
                            <Masonry
                                gutter='1rem'
                            >
                                {photos.map((photo, index) =>(
                                    <img
                                        key={photo.id}
                                        src={photo.imagePath}
                                        style={{width: "100%", display: "block", cursor: "pointer"}}
                                        alt=""
                                        onClick={() => handleClick(index)}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </>
            )}
            </div>
        )}
        {viewActive === true && (
            <div>
                {activePhoto !== "" && (
                    <div className="container viewPhoto__container">
                    {photos && (
                        <>
                        <div className="titleAndCloseButton">
                            <h1 className="photoTitle">"{photos[activePhoto].title}"</h1>
                            <button className='btn' onClick={() => handleCloseView()}>X</button>
                        </div>
                        
                        <div className="photoII_photo">
                            <img src={photos[activePhoto].imagePath} alt="" />
                        </div>

                        <div className="photoII_photoInfoCard">
                            <button className='btn btn-primary btn-prev' onClick={() => handlePrevClick()}>{"<"}</button>
                            <div className="infooo">
                            <h2 className='photoInfoHeading'>MORE INFORMATION</h2>
                            {photos[activePhoto].about.format === "Film" && (
                                <>
                                    <div className="photoCategories">
                                        <h4>FORMAT: </h4>
                                        <p>Analog</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>CAMERA BODY: </h4>
                                        <p>{photos[activePhoto].about.body}</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>FILM USED: </h4>
                                        <p>{photos[activePhoto].about.film}</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>LENS: </h4>
                                        <p>{photos[activePhoto].about.lens}</p>
                                    </div>
                                    
                                    <div className="photoSettingsInformation">
                                        <div className="photoSettingsCategories">
                                            <h4>SHUTTER SPEED: </h4>
                                            <p>{photos[activePhoto].about.shutterSpeed}s</p>
                                        </div>
                                        <div className="photoSettingsCategories">
                                            <h4>APERATURE: </h4>
                                            <p>f{photos[activePhoto].about.aperature}</p>
                                        </div>
                                        <div className="photoSettingsCategories">
                                            <h4>ISO: </h4>
                                            <p>{photos[activePhoto].about.iso}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {photos[activePhoto].about.format === "Digital" && (
                                <>
                                    <div className="photoCategories">
                                        <h4>FORMAT: </h4>
                                        <p>{photos[activePhoto].about.format}</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>CAMERA BODY: </h4>
                                        <p>{photos[activePhoto].about.body}</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>CAMERA SENSOR: </h4>
                                        <p>{photos[activePhoto].about.sensor}</p>
                                    </div>
                                    <div className="photoCategories">
                                        <h4>LENS: </h4>
                                        <p>{photos[activePhoto].about.lens}</p>
                                    </div>
        
                                    <div className="photoSettingsInformation">
                                        <div className="photoSettingsCategories">
                                            <h4>SHUTTER SPEED: </h4>
                                            <p>{photos[activePhoto].about.shutterSpeed}s</p>
                                        </div>
                                        <div className="photoSettingsCategories">
                                            <h4>APERATURE: </h4>
                                            <p>f{photos[activePhoto].about.aperature}</p>
                                        </div>
                                        <div className="photoSettingsCategories">
                                            <h4>ISO: </h4>
                                            <p>{photos[activePhoto].about.iso}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            </div>
                            <button className='btn btn-primary btn-next' onClick={() => handleNextClick()}>{">"}</button>
                        </div>
                    </>
                    )}
                </div>
                )}
            </div>
        )}
    </section>
  )
}

export default Gallery