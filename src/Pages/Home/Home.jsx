import TopHeader from "../../components/TopHeader/TopHeader"
import Footer from "../../components/Footer/Footer"
import Carousel from "../../components/Carousel/Carousel"
import CardBox from "../../components/CardBox/CardBox"

import "./Home.css"
import ProductCard from "../../components/ProductCard/ProductCard"

import image1 from "../../assets/c-image-1.png"
import image2 from "../../assets/c-image-2.png"
import image3 from "../../assets/c-image-3.png"
import image4 from "../../assets/c-image-4.png"
import { UseProductContext } from "../../ProductContext"
import { useEffect, useState } from "react"

export function calculate_review_avg(prod) {
    if (prod.reviews.length === 0) { return -1 }

    return (prod.reviews.reduce((sum, review)=>sum + review.rating, 0)) / prod.reviews.length
}

export default function Home() {
    const imgList = [{path: image1, alt: "image 1"},
                    {path: image2, alt: "image 2"},
                    {path: image3, alt: "image 3"},
                    {path: image4, alt: "image 4"},
    ];

    const { products,loading } = UseProductContext();
    
    const avgProdRatings = products.map(product => ({
        ...product,
        avgRating: calculate_review_avg(product)
    }));

    const potw_list = [...avgProdRatings].filter(prods => prods.reviews.length > 0).sort((a,b) => b.quantity_sold - a.quantity_sold
                                                && b.avgRating - a.avgRating).slice(0,8);

    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
                <div className="pageContentContainer flex column">
                    <Carousel images={imgList} />
                    <CardBox 
                    occupyWidth={true}
                    topMargin={'30px'}
                    bottomMargin={'30px'}
                    hasRoundedCorner={true}
                    cardContent={
                        <div id="potw-container" className="flex column vCenter">
                            <h3 id="potw-header" className=" flex row semibold">Products of the Week!</h3>

                            { (loading || products.length === 0) ? (
                                <div id="potw-loading">
                                    <p>Loading...</p>
                                </div>
                            ) : 
                            (
                                <div id="potw-prod-grid"> 
                                    { potw_list.map((p, idx) => 
                                        <ProductCard   
                                        key={idx}
                                        productId={p.id}
                                        productImage={p.images[0].path}
                                        productName={p.name}
                                        productPrice={p.price}
                                        productRating={p.avgRating ?? 0}
                                        numOfRatings={p.reviews.length}
                                    />
                                    )}
                                </div>
                            )}
                        </div>
                    }/>
                </div>
                
            <Footer />
        </div>
    )
}