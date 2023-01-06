import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://i.ibb.co/F8JWpCD/1.jpg",
    "https://i.ibb.co/9yRGQrd/2.jpg",
    "https://i.ibb.co/YWYw6fy/3.jpg",
    "https://i.ibb.co/C1fvM7Z/12.jpg",
    "https://i.ibb.co/TK3Fwb3/5.jpg",
    "https://i.ibb.co/nfHcsB6/6.jpg",
    "https://i.ibb.co/RDtQd0R/8.jpg",
    "https://i.ibb.co/zszJT8y/7.jpg",
    "https://i.ibb.co/vxLFC3m/4.jpg",
    "https://i.ibb.co/Rzfx6qH/9.jpg",
    "https://i.ibb.co/Jp9df6s/10.jpg",
    "https://i.ibb.co/fq8NpHh/11.jpg",

    "https://i.ibb.co/Wp2GtWp/main.jpg",
    "https://i.ibb.co/mCHB1Kx/1.jpg",
    "https://i.ibb.co/VVkypHx/2.jpg",
    "https://i.ibb.co/MhRP9yb/3.jpgv",
    "https://i.ibb.co/C82gBFk/4.jpg",
    "https://i.ibb.co/CVhcNMN/5.jpg",
    "https://i.ibb.co/RvmFdqL/6.jpg",
    "https://i.ibb.co/1n5bKLS/7.jpg",
    "https://i.ibb.co/syt0zZG/8.jpg",
    "https://i.ibb.co/H2L0QkW/9.jpg",
    "https://i.ibb.co/HXSypvN/10.jpgv",
    "https://i.ibb.co/h9nwfqm/11.jpg",
    "https://i.ibb.co/6bt8fWX/12.jpg",
    "https://i.ibb.co/cD32Y9K/13.jpg",
    "https://i.ibb.co/MnnKcd8/14.jpg",
    "https://i.ibb.co/0sBWDYv/15.jpg",
    "https://i.ibb.co/7pDypMR/16.jpg",
    "https://i.ibb.co/3449PVN/17.jpg",
    "https://i.ibb.co/m9ZhRM2/18.jpg",

    "https://i.ibb.co/yhgm46h/main.jpg",
    "https://i.ibb.co/Lx5t7bB/2.jpg",
    "https://i.ibb.co/470vq4w/1.jpg",
    "https://i.ibb.co/WFdr7MB/3.jpgv",
    "https://i.ibb.co/j38mVWJ/4.jpgv",
    "https://i.ibb.co/bWfMLpk/5.jpg",
    "https://i.ibb.co/mDKnFtT/8.jpgv",
    "https://i.ibb.co/dQtH8xM/6.jpg",
    "https://i.ibb.co/m98t8JT/7.jpg",
    "https://i.ibb.co/FbZT0Mz/9.jpg",
    "https://i.ibb.co/ZB5VccD/10.jpg"

];

const Gallery = () => {
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
    <section>
        <h5>PHOTOGRAPHY</h5>
        <h2>My Most Recent Photos </h2>
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

export default Gallery