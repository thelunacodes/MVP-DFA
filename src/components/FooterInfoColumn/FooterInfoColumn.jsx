import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./FooterInfoColumn.css"

export default function FooterInfoColumn({title, items}) {

    return (
        <div>
            <h3 className="infoHeader">{title}</h3>
            {items.map((i, key) => 
                <div key={key} className="flex row contactInfoRow"> 
                    {i.icon !== null && <FontAwesomeIcon icon={i.icon} className="contactInfoIcon" />}
                    <p className="contactInfoText">{i.text}</p>
                </div>
            )}
        </div>
    )
}