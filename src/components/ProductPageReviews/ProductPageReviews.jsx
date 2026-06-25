import React from "react"

import CardBox from "../CardBox/CardBox"
import ProductReview from "../ProductReview/ProductReview"
import "./ProductPageReviews.css"

export default function ProductPageReviews({currProdReviews}) {
    return (
        <CardBox occupyWidth={true}
        cardContent={ 
            <div className="prodReviewsContainer flex column hCenter">
                <h3 className="centeredText semibold prodReviewsHeader">Product Reviews</h3>
                <div className=" flex column vCenter prodReviews">
                    { currProdReviews.length > 0 ? (currProdReviews.map((r,index) => (
                        <React.Fragment key={index}>
                            <ProductReview username={r.user} rating={r.rating} datetime={r.datetime} comment={r.comment} />
                        </React.Fragment>
                    ))) : (
                        <p className="prodNoReviews centeredText secondaryText">No reviews :(</p>
                    )}
                </div>
            </div>
        }/>
    )
}