import { useState } from "react";
import "./Carousel.css"

import image1 from "../../assets/c-image-1.png"
import image2 from "../../assets/c-image-2.png"
import image3 from "../../assets/c-image-3.png"
import image4 from "../../assets/c-image-4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
    const imgList = [{img: image1, altText: "image 1"},
                    {img: image2, altText: "image 2"},
                    {img: image3, altText: "image 3"},
                    {img: image4, altText: "image 4"},
    ];

    const [imgIndex, setImgIndex] = useState(0);

    function wrapIndex(val, max) {
        return ((val % max) + max) % max;
    }

    function next() {
        setImgIndex(wrapIndex(imgIndex + 1, imgList.length))
    }

    function back() {
        setImgIndex(wrapIndex(imgIndex - 1, imgList.length))
    }

    return (
        <div>
            <div id="carousel-container" className="flex vCenter hCenter">
                <div>
                    <button className="chevronBtn" onClick={() => back()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
                
                <img id="carousel-image" src={imgList[imgIndex].img} alt={imgList[imgIndex].altText} />

                <button className="chevronBtn" onClick={() => next()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="flex hCenter dotContainer">
                {imgList.map((img, index) => <FontAwesomeIcon icon={faCircle} className={`carouselDot ${index == imgIndex ? 'blueBall' : 'grayBall'}`} /> )}
            </div>
        </div>
        
    )
}