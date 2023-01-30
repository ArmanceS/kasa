import { useState } from "react"
import "./Carousel.css"

export default function Gallery(props) {

    let pictures = props.pictures

    let [current, setCurrent] = useState(0)
    let [currentImage, setCurrentImage] = useState(pictures[0])
    
    let nextPicture = () => {
        let nextCurrent = current
        if(current === pictures.length -1){
            nextCurrent = 0 
        }else{
            nextCurrent = current +1
        }
        setCurrent(nextCurrent)
        setCurrentImage(pictures[nextCurrent])
    }

    let backPicture = () => {
        let backCurrent = current
        if(current === 0 ){
            backCurrent = pictures.length -1
        } else {
            backCurrent = current -1
        }
        setCurrent(backCurrent)
        setCurrentImage(pictures[backCurrent])
    }
    if(pictures.length > 1) {
        return ( 
            <>
                <div className="pictures-container">
                <img src={currentImage} alt="Photos du logement" className="img-carousel" key={current}/>   
                </div> 
                <section className="arrows">
                    <div id="arrow_back" onClick={() => backPicture()}>
                        <i className="fa-solid fa-chevron-left arrow_bck"></i>
                    </div>
                    <div id="arrow_next" onClick={() => nextPicture()}>
                        <i className="fa-solid fa-chevron-right arrow_nxt"></i>
                    </div>
                </section>
                <p className="counter">{current + 1}/{pictures.length}</p>
            </>
        )
    } else {
        return (
            <>
                <div className="pictures-container">
                    <img src={currentImage} alt="Photos du logement" className="img-carousel" key={current}/>   
                </div> 
                <p className="counter">{current + 1}/{pictures.length}</p>
            </>
        )
    }

}