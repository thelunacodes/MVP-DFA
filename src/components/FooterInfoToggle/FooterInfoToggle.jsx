import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./FooterInfoToggle.css"

export default function FooterInfoToggle({title, items}) {
    const [showItems, setShowItems] = useState(false);

    return (
        <>
            <div className="flex row infoToggleHeader" onClick={() => setShowItems(!showItems)}>
                <h3 className="infoHeader">{title}</h3>
                <div className="flex vCenter">
                    <FontAwesomeIcon className="flex hCenter toggleChevron" icon={showItems ? faChevronUp : faChevronDown} />
                </div>
            </div>
            <div className={`infoDropdownContainer ${showItems && 'showingItems'}`}>
                 { showItems &&
                        items.map((i, k) =>
                            <div key={k} className="flex vCenter infoDropdown">
                                {i.icon !== null && <FontAwesomeIcon icon={i.icon} className="contactInfoIcon" />}
                                <p>{i.text}</p>
                            </div>
                        )
                }
            </div>
           
           

        </>
        
    )
}