import TopHeader from "../../components/TopHeader/TopHeader"
import Footer from "../../components/Footer/Footer"
import Carousel from "../../components/Carousel/Carousel"
import CardBox from "../../components/CardBox/CardBox"

import "./Home.css"
import ProductCardSmall from "../../components/ProductCardSmall/ProductCardSmall"

export default function Home() {

    return (
        <div>
            <TopHeader />
                <Carousel />
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