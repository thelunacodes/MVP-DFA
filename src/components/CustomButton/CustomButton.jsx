import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CustomButton.css"

export default function CustomButton({targetUrl, newTab=false, icon=null, labelText, isCentered=false}) {

    return (
        <>
        <button id="main-btn" className={`flex row ${isCentered && 'hCenter'}`}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}
            <p>{labelText}</p>
        </button>
        </>
    )
}