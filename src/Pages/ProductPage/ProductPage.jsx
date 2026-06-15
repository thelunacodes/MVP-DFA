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

    const PRODUCTNAME = "Nome do Produto Produto Produto Produto";
    const PRODUCTSELLER = "Seller";
    const PRODUCTPRICE = 67.00;
    const PRODUCTRATING = 4.5;


    return (
        <div class="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex">
                <CardBox cardContent={
                    <div id="product-container" className="flex row">
                        <div id='prod-col-1'>
                            <Carousel images={imgList}/>
                        </div>
                        <div id='prod-col-2' className="flex column">
                            <h2 id="prod-name">{PRODUCTNAME}</h2>
                            <h2 id="prod-seller">{PRODUCTSELLER}</h2>
                            <div style={{"marginLeft":"auto", "marginTop": "25px"}}>
                                <StarRating rating={PRODUCTRATING} numOfRatings={2} />
                            </div>
                            <div className="divider"/>
                            <h2 id="prod-price">R$ {PRODUCTPRICE.toFixed(2)}</h2>
                            
                            <div id='prod-btn-container' className="flex column hCenter">
                                <CustomButton isCentered={true} labelText="Buy" />
                                <CustomButton isCentered={true} labelText="Send to Cart" />
                            </div>
                        </div>
                    </div>
                }/>
            </div>
            <Footer />
        </div>
    )
}