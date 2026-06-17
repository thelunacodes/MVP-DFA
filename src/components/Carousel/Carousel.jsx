import { useState } from "react";
import "./Carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Carousel({images, imageHeight="auto", imageWidth="auto"}) {
    const [imgIndex, setImgIndex] = useState(0);

    const carouselImageStyle = {
        "--image-width": `${imageWidth}`,
        "--image-height": `${imageHeight}`,
    }

    function wrapIndex(val, max) {
        return ((val % max) + max) % max;
    }

    function next() {
        setImgIndex(wrapIndex(imgIndex + 1, images.length))
    }

    function back() {
        setImgIndex(wrapIndex(imgIndex - 1, images.length))
    }

    return (
        <div id="carousel-root">
            <div id="carousel-container" className="flex vCenter hCenter">
                <div>
                    <button className="chevronBtn" onClick={() => back()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
                
                <img id="carousel-image" src={images[imgIndex].img} alt={images[imgIndex].altText} style={carouselImageStyle}/>

                <button className="chevronBtn" onClick={() => next()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="flex hCenter dotContainer">
                {images.map((img, index) => <FontAwesomeIcon key={index} icon={faCircle} className={`carouselDot ${index == imgIndex ? 'blueBall' : 'grayBall'}`} /> )}
            </div>
        </div>
        
    )
}