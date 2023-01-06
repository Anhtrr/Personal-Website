import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://i.ibb.co/yhgm46h/main.jpg",
    "https://i.ibb.co/Lx5t7bB/2.jpg",
    "https://i.ibb.co/470vq4w/1.jpg",
    "https://i.ibb.co/WFdr7MB/3.jpgv",
    "https://i.ibb.co/j38mVWJ/4.jpgv",
    "https://i.ibb.co/bWfMLpk/5.jpg",
    "https://i.ibb.co/mDKnFtT/8.jpgv",
    "https://i.ibb.co/dQtH8xM/6.jpg",
    "https://i.ibb.co/FbZT0Mz/9.jpg",
    "https://i.ibb.co/ZB5VccD/10.jpg"
];

const Gallery3 = () => {
    const[currImg, setCurrImg] = useState({img: '', i: 0})
    const viewImage = (img, i)=>{
        setCurrImg({img, i})
    }
    const imgAction = (action) => {
        let i = currImg.i;
        if(action === 'next-img'){
            setCurrImg({img: images[i+1], i: i+1});
        }
        if(action === 'prev-img'){
            setCurrImg({img: images[i-1], i: i-1})
        }
        if(!action){
            setCurrImg({img: '', i: 0})
        }
    }
    return (
    <section className='g3' id='#'>
        <h5>PHOTOGRAPHY</h5>
        <h2>Motion • 2019</h2>
    {currImg.img &&
        <div style={{
            width: "100%",
            height: "100%",
            background: "rgba(32, 32, 32, 0.8)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            padding: "0",
            marginTop: "-15rem"
        }}>
            <button
                style={{position: "absolute", top: "1rem", right: "1rem"}}
                onClick={() => imgAction()}
                className="btn"
            >
                X
            </button>
            <button className='btn btn-primary' onClick={() => imgAction('prev-img')}>
                Previous
            </button>
            <img
                src={currImg.img}
                style={{width: "auto", maxWidth: "90%", maxHeight: "90%", borderRadius: "2rem"}}
            >
            </img>
            <button className='btn btn-primary' onClick={() => imgAction('next-img')} >
                Next
            </button>
        </div>
    }
    <div style={{paddingTop: '2rem', paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '2rem'}}>
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry
            gutter='1rem'>
                {images.map((image, i) =>(
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor: "pointer"}}
                        alt=""
                        onClick={() => viewImage(image, i)}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    </section>
  )
}

export default Gallery3