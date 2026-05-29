import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardBox from "../CardBox/CardBox"
import "./ProductCardSmall.css"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function ProductCardSmall({productImage, productName, productPrice, productRating, numOfRatings}) {
    
    var hasHalf = productRating % 1 != 0;
    var numOfStars = Math.floor(productRating);

    var starsIcon = []
    
    //Render stars
    for (let i = 0; i < numOfStars; i++) {
        starsIcon.push(faStar);
    }
    
    if (hasHalf) {
        starsIcon.push(faStarHalf);
    }

    return (
        <CardBox 
        hasHoverResponse={true}
        cardContent={
            <div className="prodContainerSmall"> 
                <img id="prod-image" src={productImage} alt={`${productName}'s Image`}/>

                <p id="prod-name">{productName}</p>
                <div id="prod-rating-row" className="flex row">
                    <p id="prod-rating">{productRating.toFixed(1)}</p>
                    <div id="prod-stars-container" className="flex row starsContainer">
                        {starsIcon.map((ico,idx) => <FontAwesomeIcon key={idx} icon={ico} className="starIcon" />)}
                    </div>
                    <p id="prod-num-of-ratings">{numOfRatings}</p>
                </div>
                <p id="prod-price">$ {productPrice.toFixed(2)}</p>
            
            </div>
        }
        />
    )
}