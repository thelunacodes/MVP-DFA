import CardBox from "../../components/CardBox/CardBox";
import Footer from "../../components/Footer/Footer";
import TopHeader from "../../components/TopHeader/TopHeader";
import Carousel from "../../components/Carousel/Carousel";
import "./ProductPage.css"

import StarRating from "../../components/StarRating/StarRating";
import CustomButton from "../../components/CustomButton/CustomButton";
import ProductReview from "../../components/ProductReview/ProductReview";
import React, { use, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { UseUserContext } from "../../UserContext";
import { UseProductContext } from "../../ProductContext";
import { calculate_review_avg } from "../Home/Home";
import ProductPageReviews from "../../components/ProductPageReviews/ProductPageReviews";
import ProductReviewSubmission from "../../components/ProductReviewSubmission/ProductReviewSubmission";
import ProductInfoCard from "../../components/ProductInfoCard/ProductInfoCard";


export default function ProductPage() {
    let params = useParams(); // Retrieve product id 
    
    const {products, finishedLoading} = UseProductContext();
    const [ currProd, setCurrProd ] = useState(undefined);
    const [ currProdReviews, setCurrProdReviews ] = useState([]);

    function loadProductData() {
        var selectedProd = products.find(prod => prod.id === Number(params.id));

        if (selectedProd) {
            setCurrProd(selectedProd)
            setCurrProdReviews(selectedProd.reviews)
        }
    }

    useEffect(() => {        
        if (finishedLoading) {
            loadProductData()
        }
    }, [products])

    //Update product rating data
    useEffect(() => {
        if (!currProd) { return; }

        setCurrProd({...currProd, 
            reviews: currProdReviews})
    }, [currProdReviews])
                            
    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex column">
                { (!finishedLoading || currProd === undefined) ? (
                    <></>    
                ) : (
                    <>
                        <ProductInfoCard prodObj={currProd} />
                        <div className="flex row" style={{"gap":"10px", "marginTop":"10px"}}>
                            <ProductPageReviews currProdReviews={currProdReviews} />
                            <ProductReviewSubmission currProdReviews={currProdReviews} setCurrProdReviews={setCurrProdReviews} />
                        </div>
                    </>
                )}
                
            </div>
            <Footer />
        </div>
    )
}