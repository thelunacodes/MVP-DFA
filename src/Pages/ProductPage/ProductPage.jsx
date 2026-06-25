import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { UseProductContext } from "../../ProductContext";
import ProductPageReviews from "../../components/ProductPageReviews/ProductPageReviews";
import ProductReviewSubmission from "../../components/ProductReviewSubmission/ProductReviewSubmission";
import ProductInfoCard from "../../components/ProductInfoCard/ProductInfoCard";
import Footer from "../../components/Footer/Footer";
import TopHeader from "../../components/TopHeader/TopHeader";
import "./ProductPage.css"

export default function ProductPage() {
    let params = useParams(); // Retrieve product id 
    let navigate = useNavigate();

    const {products, finishedLoading} = UseProductContext();
    const [ currProd, setCurrProd ] = useState(undefined);
    const [ currProdReviews, setCurrProdReviews ] = useState([]);

    function loadProductData() {
        var selectedProd = products.find(prod => prod.id === Number(params.id));

        if (selectedProd) {
            setCurrProd(selectedProd)
            setCurrProdReviews(selectedProd.reviews)
        } else {
            navigate("/notfound");
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
                        <div className="flex reviewComponentsContainer">
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