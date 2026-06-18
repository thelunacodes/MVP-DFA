import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardBox from "../CardBox/CardBox"
import "./ProductReview.css" 
import { faUser } from "@fortawesome/free-solid-svg-icons"
import StarRating from "../StarRating/StarRating"


export default function ProductReview({username, date, comment, rating}) {
    function formatDate() {
        var day = date.getDate().toString().padStart(2,"0");
        var month = (date.getMonth() + 1).toString().padStart(2,"0");
        var year = date.getFullYear();
        var hours = date.getHours().toString().padStart(2,"0");
        var minutes = date.getMinutes().toString().padStart(2,"0");

        return `${day}/${month}/${year} - ${hours}:${minutes}`
    }

    return (
        <CardBox     
            cardContent={
                <div className="reviewContentContainer flex row">
                    <div className="profilePicture flex vCenter hCenter">
                        <FontAwesomeIcon className="picIcon" icon={faUser} />
                    </div>
                    <div className="flex column" style={{"marginLeft":"15px"}}>
                        <p className="reviewUsername semibold">{username}</p>
                        <StarRating rating={5.0} />
                        <p className="reviewComment">{comment}</p>
                    </div>
                    <div className="reviewDateCol secondaryText">
                        <p>{formatDate(date)}</p>
                    </div>
                </div>
            }/>
    )
}