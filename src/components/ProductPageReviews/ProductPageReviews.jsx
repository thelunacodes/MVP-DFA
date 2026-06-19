import React from "react"
import CardBox from "../CardBox/CardBox"
import ProductReview from "../ProductReview/ProductReview"
import "./ProductPageReviews.css"

export default function ProductPageReviews({currProdReviews}) {
    return (
        <CardBox occupyWidth={true}
        cardContent={ 
            <div id="prod-reviews-container" className="flex column hCenter">
                <h3 className="centeredText semibold" id="prod-reviews-header">Product Reviews</h3>
                <div id="prod-reviews" className="flex column vCenter">
                    { currProdReviews.length > 0 ? (currProdReviews.map((r,index) => (
                        <React.Fragment key={index}>
                            <ProductReview username={r.user} rating={r.rating} datetime={r.datetime} comment={r.comment} />
                        </React.Fragment>
                    ))) : (
                        <p id="prod-no-reviews" className="centeredText secondaryText">No reviews :(</p>
                    )}
                </div>
            </div>
        }/>
    )
}