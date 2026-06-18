import "./StarRating.css"
import { faStar, faStarHalf, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StarRating({maxScore=5, rating, numOfRatings, hasEmptyStars=false}) {
    var hasHalf = rating % 1 != 0;
    var numOfStars = Math.floor(rating);
    var starsIcon = []

    for (let i = 0; i < numOfStars; i++) {
        starsIcon.push({icon: faStar, isEmpty: false});
    }
        
    if (hasHalf) {
        starsIcon.push({icon: faStarHalfStroke, isEmpty: false});
    }

    if (hasEmptyStars) {
        var numOfGrayStars = Math.floor(maxScore - rating);

        for (let i = 0; i < numOfGrayStars; i++) {
            starsIcon.push({icon: faEmptyStar, isEmpty: true});

        }

        
    }

    return (
        <div className="flex row vCenter">
            <p id="rating-val">{rating.toFixed(1)}</p>
            <div id="stars-container" className="flex row starsContainer">
                {starsIcon.map((ico,idx) => <FontAwesomeIcon key={idx} icon={ico.icon} className={`starIcon`} />)}
            </div>
            {numOfRatings && <p id="num-of-ratings-val">{numOfRatings}</p>}
        </div>
    )
}