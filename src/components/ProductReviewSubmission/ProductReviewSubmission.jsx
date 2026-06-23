import { useEffect, useState } from "react"
import CardBox from "../CardBox/CardBox"
import CustomButton from "../CustomButton/CustomButton"
import StarRating from "../StarRating/StarRating"
import "./ProductReviewSubmission.css"
import { UseUserContext } from "../../UserContext"

export default function ProductReviewSubmission({ currProdReviews, setCurrProdReviews}) {
    const {username} = UseUserContext()
    const [sendBtnLabel, setSendBtnLabel] = useState("Submit")
    const [userRating, setUserRating] = useState(0);
    const [userComment, setUserComment] = useState("");
    const [isSendingReview, setIsSendingReview] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    function handleRatingChange(newValue) {
        setUserRating(Number(newValue));
    }

    // Change button label while the review is being "sent"
    useEffect(() => {
        setSendBtnLabel(isSendingReview ? "Submitting..." : "Submit")
    },[isSendingReview] )

    // Send review (that will disappear upon refreshing the page :p)
    async function sendReview() {
        setIsSendingReview(true);

        await delay(1000)
        setCurrProdReviews([{user: username, 
                            comment: userComment, 
                            rating: userRating, 
                            datetime: new Date().toISOString()}, 
                            ...currProdReviews ])
        setUserComment("");
        setUserRating(0);
        setIsSendingReview(false);
    }

    return (
        <CardBox occupyWidth={true} cardContent={
            <div className="prodReviewsSubmissionContainer">
                <h3 className="centeredText semibold prodReviewSubmissionHeader">Submit a Review</h3>
                <div className="prodRatingSelect flex column vCenter">
                    <StarRating hasEmptyStars={true} rating={userRating}/>
                    <input disabled={isSendingReview} className="ratingRangeInput" type="range" value={userRating} min="0" max="5" step="0.5" onChange={(e) => handleRatingChange(e.target.value)} />
                </div>
                <textarea onChange={(e) => setUserComment(e.target.value)} disabled={isSendingReview} className="prodReviewTextArea" value={userComment}/>
                <div className="prodReviewBtnArea flex">
                    <CustomButton onClick={sendReview} isDisabled={isSendingReview} labelText={sendBtnLabel} />
                </div>
            </div>
        } />
    )  
}