import CardBox from "../CardBox/CardBox"
import "./ProductReview" 


export default function ProductReview() {
    return (
        <CardBox occupyWidth={true} 
            cardContent={
                <div id="review-content-container" className="flex row">
                    
                </div>
            }/>
    )
}