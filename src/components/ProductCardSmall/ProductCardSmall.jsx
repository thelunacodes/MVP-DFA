import { useNavigate } from "react-router"
import CardBox from "../CardBox/CardBox"
import StarRating from "../StarRating/StarRating"
import "./ProductCardSmall.css"

export default function ProductCardSmall({productImage, productName, productPrice, productRating, numOfRatings}) {
    let navigate = useNavigate()

    function goToProductPage() {
        navigate("/product/2")
    }

    return (
        <CardBox 
        hasHoverResponse={true}
        cardContent={
            <div className="prodContainerSmall" onClick={() => goToProductPage(2)}> 
                <img id="prod-card-image" src={productImage} alt={`${productName}'s Image`}/>

                <p id="prod-card-name">{productName}</p>
                <div id="prod-card-rating-row" className="flex row">
                    <StarRating rating={productRating} numOfRatings={numOfRatings} />
                </div>
                <p id="prod-card-price">$ {productPrice.toFixed(2)}</p>
            
            </div>
        }
        />
    )
}