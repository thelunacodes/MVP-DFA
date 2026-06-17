import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CustomButton.css"

export default function CustomButton({occupyWidth=false, bgColor=null, maxWidth="none", targetUrl, newTab=false, icon=null, labelText, isCentered=false}) {
    const buttonStyle = {
        "--btn-width": occupyWidth ? "100%" : "auto",
        "--btn-bg-color": bgColor === null ? "#1C4EA3" : bgColor,
        "--btn-max-width": `${maxWidth}`
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