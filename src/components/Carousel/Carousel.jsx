import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css"
import placeholderImage from "../../assets/c-image-placeholder.png"

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

    // Swipe controls for mobile
    const touchStartX = useRef(0);
    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;

        if (Math.abs(deltaX) < 50) return;

        if (deltaX > 0) {
            back();
        } else {
            next();
        }
    }

    if (images.length === 0) { images = [{img: placeholderImage, altText: "No image(s)."}] }

    return (
        <div className="carouselRoot">
            <div className="carouselContainer flex vCenter hCenter"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div>
                    <button className="chevronBtn" disabled={images.length == 1} onClick={() => back()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
                
                <img className="carouselImage" src={images[imgIndex].path} alt={images[imgIndex].alt} style={carouselImageStyle}/>

                <button className="chevronBtn" disabled={images.length == 1} onClick={() => next()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="flex hCenter dotContainer">
                {images.map((img, index) => <FontAwesomeIcon key={index} icon={faCircle} className={`carouselDot ${index == imgIndex ? 'blueBall' : 'grayBall'}`} /> )}
            </div>
        </div>
        
    )
}