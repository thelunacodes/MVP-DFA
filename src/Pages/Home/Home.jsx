import TopHeader from "../../components/TopHeader/TopHeader"
import Footer from "../../components/Footer/Footer"
import Carousel from "../../components/Carousel/Carousel"
import CardBox from "../../components/CardBox/CardBox"

import "./Home.css"
import ProductCardSmall from "../../components/ProductCardSmall/ProductCardSmall"

import image1 from "../../assets/c-image-1.png"
import image2 from "../../assets/c-image-2.png"
import image3 from "../../assets/c-image-3.png"
import image4 from "../../assets/c-image-4.png"

export default function Home() {
    const imgList = [{img: image1, altText: "image 1"},
                    {img: image2, altText: "image 2"},
                    {img: image3, altText: "image 3"},
                    {img: image4, altText: "image 4"},
    ];

    return (
        <div>
            <TopHeader />
                <Carousel images={imgList} />
                <CardBox 
                occupyWidth={true}
                leftMargin={'10%'}
                rightMargin={'10%'}
                topMargin={'30px'}
                bottomMargin={'30px'}
                cardContent={
                    <div id="potw-container" className="flex column">
                        <h3 id="potw-header" className=" flex row">Products of the Week!</h3>
                    
                        <div id="potw-prod-grid"> 
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />    
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />  
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />  
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />   
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />   
                            <ProductCardSmall 
                                productImage={"https://www.shutterstock.com/image-photo/young-cat-isolated-on-white-600nw-2737712153.jpg"}
                                productName={"GATO"}
                                productPrice={67.00}
                                productRating={5.0}
                                numOfRatings={69}
                            />                          
                        </div>
                    </div>
                }/>
            <Footer />
        </div>
    )
}