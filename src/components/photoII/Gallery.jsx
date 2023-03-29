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
  const navigate = useNavigate()
  
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
  
  const handleClick = (id) => {
    if(collection.title === "All Photos"){
        navigate(`/Photography/PhotoII/Photos/All/${id}`)
    }
    else{
        navigate(`/Photography/PhotoII/Photos/${collection.title.trim()}/${id}`)
    }
  }

  return (
    <section className='photoIIGallery'>
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
                            {photos.map(photo =>(
                                <img
                                    key={photo.id}
                                    src={photo.imagePath}
                                    style={{width: "100%", display: "block", cursor: "pointer"}}
                                    alt=""
                                    onClick={() => handleClick(photo.id)}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </>
        )}
    </section>
  )
}

export default Gallery