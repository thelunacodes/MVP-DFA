import CardBox from "../../components/CardBox/CardBox";
import Footer from "../../components/Footer/Footer";
import TopHeader from "../../components/TopHeader/TopHeader";
import Carousel from "../../components/Carousel/Carousel";
import "./ProductPage.css"

import image1 from "../../assets/c-image-1.png"
import image2 from "../../assets/c-image-2.png"
import image3 from "../../assets/c-image-3.png"
import image4 from "../../assets/c-image-4.png"
import StarRating from "../../components/StarRating/StarRating";
import CustomButton from "../../components/CustomButton/CustomButton";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductReview from "../../components/ProductReview/ProductReview";
import React, { use, useEffect, useRef, useState } from "react";


export default function ProductPage({productId}) {
    const MAX_DESCRIPTION_HEIGHT = 500;
    const productDescriptionRef = useRef(null);
    const [canSeeMore, setCanSeeMore] = useState(true);
    const [seeMore, setSeeMore] = useState(false)
    const descriptionContainerStyle = {
        "--description-max-height": seeMore ? 'none' : `${MAX_DESCRIPTION_HEIGHT}px`
    }

    const [userRating, setUserRating] = useState(0);
    const [userComment, setUserComment] = useState("");
    const [sendBtnLabel, setSendBtnLabel] = useState("Submit")
    const [isSendingReview, setIsSendingReview] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    function handleRatingChange(newValue) {
        setUserRating(Number(newValue));
    }

    useEffect(() => {
        setSendBtnLabel(isSendingReview ? "Submitting..." : "Submit")
    },[isSendingReview] )

    async function sendReview() {
        setIsSendingReview(true);

        await delay(1000)

        setUserComment("");
        setUserRating(0);
        setIsSendingReview(false);
    }

    //Placeholder
    const imgList = [{img: image1, altText: "image 1"},
                    {img: image2, altText: "image 2"},
                    {img: image3, altText: "image 3"},
                    {img: image4, altText: "image 4"},
    ];

    const PRODUCTREVIEWSLIST = [{username:"USER", rating: 5.0, reviewDate: new Date(), comment: "Wow, really cool" },
                                {username:"USER", rating: 5.0, reviewDate: new Date(), comment: "Wow, really cool" },
                                {username:"USER", rating: 5.0, reviewDate: new Date(), comment: "Wow, really cool" },
                                {username:"USER", rating: 5.0, reviewDate: new Date(), comment: "Wow, really cool" },
                                {username:"USER", rating: 5.0, reviewDate: new Date(), comment: "Wow, really cool" }
                            ]

    const PRODUCTNAME = "Lorem ipsum dolor sit amet.";
    const PRODUCTSELLER = "Lorem ipsum";
    const PRODUCTPRICE = 67.00;
    const PRODUCTRATING = 4.5;
    const PRODUCTDESCRIPTION = "Lorem ipsum dLorem ipsum dLorem i/psum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsumdLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsuLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum d";

    // Handle long descriptions
    useEffect(() => {
        if (!productDescriptionRef.current) return;

        var element = productDescriptionRef.current;
        setCanSeeMore(element.scrollHeight > element.clientHeight)    
        setSeeMore(!canSeeMore);
    }, [])
                            
    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex column">
                <CardBox occupyWidth={true} cardContent={
                    <div id="product-container" className="flex column">
                        <div className="flex row">
                            <div id='prod-col-1'>
                                <Carousel images={imgList} imageHeight="400px"/>
                            </div>
                            <div id='prod-col-2' className="flex column">
                                <h2 className="semibold" id="prod-name">{PRODUCTNAME}</h2>
                                <h2 id="prod-seller" className="secondaryText semibold">{PRODUCTSELLER}</h2>
                                <div id="prod-rating">
                                    <StarRating rating={PRODUCTRATING} numOfRatings={2} />
                                </div>
                                <h2 className="semibold" id="prod-price">R$ {PRODUCTPRICE.toFixed(2)}</h2>
                                
                                <div id='prod-btn-container' className="flex column hCenter">
                                    <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Buy" />
                                    <CustomButton occupyWidth={true} maxWidth="60%" isCentered={true} labelText="Add to Cart" />
                                </div>
                            </div>
                        </div>
                        <div className="divider" style={{"margin":"30px 15px 10px 15px"}}></div>
                        <div id="description-container" style={descriptionContainerStyle} className="flex column hCenter">
                            <p  id="prod-description-header" className="secondaryText centeredText semibold">About the product</p>
                            <p ref={productDescriptionRef} className={!seeMore ? 'prodDescriptionEllipsis' : ''} id="prod-description">{PRODUCTDESCRIPTION}</p>
                            {canSeeMore && 
                                <p onClick={() => setSeeMore(!seeMore)} id="see-more-label" className="secondaryText flex hCenter">{seeMore ? "See Less" : "See More"}</p>}
                        </div>
                    </div>
                }/>
                <div className="flex row" style={{"gap":"10px", "marginTop":"10px"}}>
                    <CardBox 
                    cardContent={ 
                        <div id="prod-reviews-container" className="flex column hCenter">
                            <h3 className="centeredText semibold" id="prod-reviews-header">Product Reviews</h3>
                            <div id="prod-reviews" className="flex column vCenter">
                                { PRODUCTREVIEWSLIST.map((r,index) => (
                                <React.Fragment key={index}>
                                    <ProductReview username={r.username} rating={r.rating} date={r.reviewDate} comment={r.comment} />
                                </React.Fragment>
                            ))}
                            </div>
                        </div>
                    }/>
                    <CardBox occupyWidth={true} cardContent={
                        <div id="prod-review-submission">
                            <h3 className="centeredText semibold" id="prod-review-submission-header">Submit a Review</h3>
                            <div id="prod-rating-select" className="flex column vCenter">
                                <StarRating hasEmptyStars={true} rating={userRating}/>
                                <input disabled={isSendingReview} id="rating-range-input" type="range" value={userRating} min="0" max="5" step="0.5" onChange={(e) => handleRatingChange(e.target.value)} />
                            </div>
                            <textarea onChange={(e) => setUserComment(e.target.value)} disabled={isSendingReview} id="prod-review-textarea" value={userComment}/>
                            <div id="prod-review-btn-area" className="flex">
                                <CustomButton onClick={sendReview} isDisabled={isSendingReview} labelText={sendBtnLabel} />
                            </div>
                        </div>
                    } />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}