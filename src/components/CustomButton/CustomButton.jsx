import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CustomButton.css"

export default function CustomButton({bgColor=null, targetUrl, newTab=false, icon=null, labelText, isCentered=false}) {
    const buttonStyle = {
        "--bg-color": bgColor === null ? "#1C4EA3" : bgColor
    }

    return (
        <>
        <button id="main-btn" className={`flex row ${isCentered && 'hCenter'}`} style={buttonStyle}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}
            <p>{labelText}</p>
        </button>
        </>
    )
}