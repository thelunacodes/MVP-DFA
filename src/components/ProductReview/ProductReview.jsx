import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import CardBox from "../CardBox/CardBox"
import StarRating from "../StarRating/StarRating"
import "./ProductReview.css" 

export default function ProductReview({username, datetime, comment, rating}) {
    function formatDate() {
        var date = new Date(datetime);

        var day = date.getDate().toString().padStart(2,"0");
        var month = (date.getMonth() + 1).toString().padStart(2,"0");
        var year = date.getFullYear();
        var hours = date.getHours().toString().padStart(2,"0");
        var minutes = date.getMinutes().toString().padStart(2,"0");

        return `${day}/${month}/${year} ${hours}:${minutes}`
    }

    return (
        <CardBox occupyWidth={true} hasRoundedCorner={true}
            cardContent={
                <div className="reviewContentContainer flex row">
                    <div className="profilePicture flex vCenter hCenter">
                        <FontAwesomeIcon className="picIcon" icon={faUser} />
                    </div>
                    <div className="flex column" style={{"marginLeft":"15px", "width":"100%"}}>
                        <div className="flex row" style={{"justifyContent":"space-between", "width":"100%"}}>
                            <p className="reviewUsername semibold">{username}</p>
                            <div className="reviewDateColMobile secondaryText">
                                <p className="reviewDateTime">{formatDate()}</p>
                            </div>
                        </div>
                        <StarRating rating={rating} />
                        <p className="reviewComment">{comment}</p>
                        
                    </div>
                    <div className="reviewDateCol secondaryText">
                        <p className="reviewDateTime">{formatDate()}</p>
                    </div>
                </div>
            }/>
    )
}