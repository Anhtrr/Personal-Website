import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AllCollections from '../../assets/PhotoII data/AllCollections'
import AllPhotos from '../../assets/PhotoII data/AllPhotos'
import './viewPhoto.css'

const ViewPhotos = () => {
  const getParams = useParams()
  const [collection, setCollection] = useState({})
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState({})

  useEffect(() => {
    const getCollectionPhotos = () => {
        const CollectionTitle = getParams.Collection
        const PhotoID = getParams.PhotoID
        if(CollectionTitle !== "All"){
            const collectionFind = AllCollections.find(collection => collection.title == CollectionTitle)
            const photosFind = AllPhotos.filter(photo => photo.collection == collectionFind.id)
            const photoFind = photosFind.find(photo => photo.id == PhotoID)
            
            setCollection(collectionFind)
            setPhotos(photosFind)
            setPhoto(photoFind)
        }
        else{
            const collectionFind = {
                id: 0,
                description: "Photography II for Non-Majors",
                title: "All Photos"
            }
            const getAllPhotos = AllPhotos
            const photoFind = getAllPhotos.find(photo => photo.id == PhotoID)
            setCollection(collectionFind)
            setPhotos(getAllPhotos)
            setPhoto(photoFind)
        }
    }
    getCollectionPhotos()
  }, [])
  return (
    <section className='photoII_ViewPhoto'>
        <div className="container viewPhoto__container">
            {photo && (
                <>
                <div className="photoII_photo">
                    <h1 className="photoTitle">
                        "{photo.title}"
                    </h1>
                    <img src={photo.imagePath} alt="" />
                </div>
                
                <div className="photoII_photoInfoCard">
                    <h2 className='photoInfoHeading'>MORE INFORMATION</h2>
                    {photo.about.format === "Film" && (
                        <>
                            <div className="photoCategories">
                                <h4>
                                    FORMAT: 
                                </h4>
                                <p>
                                    Analog
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    CAMERA BODY: 
                                </h4>
                                <p>
                                    {photo.about.body}
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    FILM USED: 
                                </h4>
                                <p>
                                    {photo.about.film}
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    LENS: 
                                </h4>
                                <p>
                                    {photo.about.lens}
                                </p>
                            </div>
                            
                            <div className="photoSettingsInformation">
                                <div className="photoSettingsCategories">
                                    <h4>
                                        SHUTTER SPEED: 
                                    </h4>
                                    <p>
                                        {photo.about.shutterSpeed} S
                                    </p>
                                </div>
                                <div className="photoSettingsCategories">
                                    <h4>
                                        APERATURE: 
                                    </h4>
                                    <p>
                                        F {photo.about.aperature}
                                    </p>
                                </div>
                                <div className="photoSettingsCategories">
                                    <h4>
                                        ISO: 
                                    </h4>
                                    <p>
                                        {photo.about.iso}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                    {photo.about.format === "Digital" && (
                        <>
                            <div className="photoCategories">
                                <h4>
                                    FORMAT: 
                                </h4>
                                <p>
                                    {photo.about.format}
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    CAMERA BODY: 
                                </h4>
                                <p>
                                    {photo.about.body}
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    CAMERA SENSOR: 
                                </h4>
                                <p>
                                    {photo.about.film}
                                </p>
                            </div>
                            <div className="photoCategories">
                                <h4>
                                    LENS: 
                                </h4>
                                <p>
                                    {photo.about.lens}
                                </p>
                            </div>

                            <div className="photoSettingsInformation">
                                <div className="photoSettingsCategories">
                                    <h4>
                                        SHUTTER SPEED: 
                                    </h4>
                                    <p>
                                        {photo.about.shutterSpeed} S
                                    </p>
                                </div>
                                <div className="photoSettingsCategories">
                                    <h4>
                                        APERATURE: 
                                    </h4>
                                    <p>
                                        F {photo.about.aperature}
                                    </p>
                                </div>
                                <div className="photoSettingsCategories">
                                    <h4>
                                        ISO: 
                                    </h4>
                                    <p>
                                        {photo.about.iso}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </>
            )}
        </div>
    </section>
  )
}

export default ViewPhotos