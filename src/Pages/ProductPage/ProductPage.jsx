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


export default function ProductPage({productId}) {
    //Placeholder
    const imgList = [{img: image1, altText: "image 1"},
                    {img: image2, altText: "image 2"},
                    {img: image3, altText: "image 3"},
                    {img: image4, altText: "image 4"},
    ];

    const textReview = {username:"USER", rating: 5.0, datetime: new Date.now()  }

    const PRODUCTNAME = "Nome do Produto Produto Produto Produto";
    const PRODUCTSELLER = "Seller Name";
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
                                <Carousel images={imgList}/>
                            </div>
                            <div id='prod-col-2' className="flex column">
                                <h2 id="prod-name">{PRODUCTNAME}</h2>
                                <h2 id="prod-seller" className="secondaryText">{PRODUCTSELLER}</h2>
                                <div id="prod-rating">
                                    <StarRating rating={PRODUCTRATING} numOfRatings={2} />
                                </div>
                                <h2 id="prod-price">R$ {PRODUCTPRICE.toFixed(2)}</h2>
                                
                                <div id='prod-btn-container' className="flex column ">
                                    <CustomButton isCentered={true} labelText="Buy" />
                                    <CustomButton isCentered={true} labelText="Add to Cart" />
                                </div>
                            </div>
                        </div>
                        <div className="divider" style={{"margin":"30px 15px 10px 15px"}}></div>
                        <div id="description-container" className="flex column hCenter">
                            <p id="prod-description-header" className="secondaryText centeredText">About the product</p>
                            <p id="prod-description">{PRODUCTDESCRIPTION}</p>
                        </div>
                    </div>
                }/>
                <br />
                <CardBox occupyWidth={true}
                    cardContent={ 
                        <div id="prod-reviews-container" className="flex column hCenter">
                         <h3 className="centeredText" id="prod-reviews-header">Product Reviews</h3>
                        </div>
                    }/>
            </div>
            <Footer />
        </div>
    )
}