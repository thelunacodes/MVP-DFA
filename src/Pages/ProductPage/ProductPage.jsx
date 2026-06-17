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
import React, { useState } from "react";


export default function ProductPage({productId}) {
    const [userRating, setUserRating] = useState(0);
    const [userComment, setUserComment] = useState("");
    const ratingValues = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
    
    function handleRatingChange(newValue) {
        setUserRating(ratingValues[newValue]);
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
    const PRODUCTDESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus.";

    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex column">
                <CardBox cardContent={
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
                        <div id="description-container" className="flex column hCenter">
                            <p id="prod-description-header" className="secondaryText centeredText semibold">About the product</p>
                            <p id="prod-description">{PRODUCTDESCRIPTION}</p>
                        </div>
                    </div>
                }/>
                <br />
                <div className="flex row" style={{"gap":"10px"}}>
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
                            <div id="prod-rating-select" className="flex column">
                                <StarRating rating={userRating}/>
                                <input type="range" defaultValue={userRating} min="0" max="10" step="1"  onChange={(e) => handleRatingChange(e.target.value)} />
                            </div>
                            <textarea id="prod-review-textarea"/>
                            <div id="prod-review-btn-area" className="flex">
                                <CustomButton labelText={"Submit"} />
                            </div>
                        </div>
                    } />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}