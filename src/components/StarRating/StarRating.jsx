import "./StarRating.css"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StarRating({rating, numOfRatings}) {
    var hasHalf = rating % 1 != 0;
    var numOfStars = Math.floor(rating);

    var starsIcon = []
    
    //Render stars
    for (let i = 0; i < numOfStars; i++) {
        starsIcon.push(faStar);
    }
    
    if (hasHalf) {
        starsIcon.push(faStarHalf);
    }

    return (
        <div className="flex row vCenter">
            <p id="rating-val">{rating.toFixed(1)}</p>
            <div id="stars-container" className="flex row starsContainer">
                {starsIcon.map((ico,idx) => <FontAwesomeIcon key={idx} icon={ico} className="starIcon" />)}
            </div>
            {numOfRatings && <p id="num-of-ratings-val">{numOfRatings}</p>}
        </div>
    )
}