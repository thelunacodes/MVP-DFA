import { useEffect, useRef, useState } from "react"
import CardBox from "../CardBox/CardBox"
import Carousel from "../Carousel/Carousel"
import CustomButton from "../CustomButton/CustomButton"
import StarRating from "../StarRating/StarRating"
import "./ProductInfoCard.css"
import { calculate_review_avg } from "../../Pages/Home/Home"


export default function ProductInfoCard({ prodObj }) {
    // Product description
    const MAX_DESCRIPTION_HEIGHT = 500;
    const productDescriptionRef = useRef(null);
    const productDescriptionHeaderRef = useRef(null);
    const [canSeeMore, setCanSeeMore] = useState(true);
    const [seeMore, setSeeMore] = useState(false)
    const descriptionContainerStyle = {
        "--description-max-height": seeMore ? 'none' : `${MAX_DESCRIPTION_HEIGHT}px`
    }

    // Check if product description is too long.
    // If so, limit its size and display the "Read more" button.
    useEffect(() => {
        if (!productDescriptionRef.current) return;

        const element = productDescriptionRef.current;
        const isOverflowing = element.scrollHeight > element.clientHeight;

        setCanSeeMore(isOverflowing);
    }, [prodObj])

    function handleSeeMore() {
        setSeeMore(!seeMore);
        productDescriptionHeaderRef.current.scrollIntoView();
    }

    return (
        <CardBox occupyWidth={true} cardContent={
            <div id="product-container" className="flex column">
                <div className="flex row">
                    <div id='prod-col-1'>
                        <Carousel images={[]} imageHeight="400px"/>
                    </div>
                    <div id='prod-col-2' className="flex column">
                        <h2 className="semibold" id="prod-name">{prodObj.name}</h2>
                        <h2 id="prod-seller" className="secondaryText semibold">{prodObj.seller}</h2>
                        <div id="prod-rating">
                            <StarRating hasEmptyStars={true} rating={calculate_review_avg(prodObj)} numOfRatings={prodObj.reviews.length} />
                        </div>
                        <h2 className="semibold" id="prod-price">R$ {prodObj.price.toFixed(2)}</h2>
                        
                        <div id='prod-btn-container' className="flex column hCenter">
                            <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Buy" />
                            <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Add to Cart" />
                        </div>
                    </div>
                </div>
                <div className="divider" id="prod-card-divider"></div>
                <div id="description-container" style={descriptionContainerStyle} className="flex column hCenter">
                    <p ref={productDescriptionHeaderRef} id="prod-description-header" className="secondaryText centeredText semibold">About the product</p>
                    <p ref={productDescriptionRef} className={!seeMore ? 'prodDescriptionEllipsis' : ''} id="prod-description">{prodObj.description}</p>
                    {canSeeMore && 
                        <p onClick={() => handleSeeMore()} id="see-more-label" className="secondaryText flex hCenter">{seeMore ? "See Less" : "See More"}</p>}
                </div>
            </div>
        }/>
    )
}