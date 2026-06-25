import { useNavigate } from "react-router"

import CardBox from "../CardBox/CardBox"
import StarRating from "../StarRating/StarRating"
import "./ProductCard.css"

export default function ProductCard({productId, productImage, productName, productPrice, productRating, numOfRatings }) {
    let navigate = useNavigate()

    function goToProductPage() {
        navigate(`/product/${productId}`)
    }

    return (
        <CardBox 
        hasRoundedCorner={true}
        hasHoverResponse={true}
        occupyHeight={true}
        cardContent={
            <div className="prodCardContainer flex column" onClick={() => goToProductPage(2)}> 
                <div className="prodcardImageContainer">
                    <img className="prodCardImage" src={productImage} alt={`${productName}'s Image`}/>
                </div>
                <div className="flex column">
                    <p className="prodCardName">{productName}</p>
                    <div className="prodCardRating flex row">
                        { numOfRatings === 0 ?
                            <p>No ratings :(</p>
                        :
                            <StarRating hasEmptyStars={true} rating={productRating} numOfRatings={numOfRatings} />
                        }
                    </div>
                    <p className="prodCardPrice">R$ {productPrice.toFixed(2)}</p>
                </div>
                
            
            </div>
        }
        />
    )
}