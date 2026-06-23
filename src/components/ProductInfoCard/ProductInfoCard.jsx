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
            <div className="flex column productInfoContainer">
                <div className="flex prodColContainer">
                    <div className="prodCol1">
                        <Carousel images={prodObj.images} imageHeight="400px" imageWidth="100%" />
                    </div>
                    <div className="flex column prodCol2">
                        <h2 className=" prodName semibold">{prodObj.name}</h2>
                        <h2 className="prodSeller secondaryText semibold">{prodObj.seller}</h2>
                        <div className="prodRating" id="prod-rating">
                            { prodObj.reviews.length > 0 ?
                                <StarRating hasEmptyStars={true} rating={calculate_review_avg(prodObj)} numOfRatings={prodObj.reviews.length} />
                                :
                                <p>No reviews.</p>
                            }
                        </div>
                        <h2 className="semibold prodPrice">R$ {prodObj.price.toFixed(2)}</h2>
                        
                        <div className="prodBtnContainer flex column hCenter">
                            <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Buy" />
                            <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Add to Cart" />
                        </div>
                    </div>
                </div>
                <div className="prodInfoCardDivider divider"></div>
                <div style={descriptionContainerStyle} className="flex column hCenter descriptionContainer">
                    <p ref={productDescriptionHeaderRef} className="prodDescriptionHeader secondaryText centeredText semibold">About the product</p>
                    <p ref={productDescriptionRef} className={`prodDescription ${!seeMore ? 'prodDescriptionEllipsis' : ''}`}>{prodObj.description}</p>
                    {canSeeMore && 
                        <p onClick={() => handleSeeMore()} className="seeMoreLabel secondaryText flex hCenter">{seeMore ? "See Less" : "See More"}</p>}
                </div>
            </div>
        }/>
    )
}