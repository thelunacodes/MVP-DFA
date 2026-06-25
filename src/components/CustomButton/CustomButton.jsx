import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./CustomButton.css"

export default function CustomButton({isDisabled=false, occupyWidth=false, bgColor=null, maxWidth="none", icon=null, labelText, isCentered=false, onClick}) {
    const buttonStyle = {
        "--btn-width": occupyWidth ? "100%" : "auto",
        "--btn-bg-color": bgColor === null ? "#1C4EA3" : bgColor,
        "--btn-max-width": `${maxWidth}`
    }

    return (
        <button disabled={isDisabled} onClick={() => onClick()} className={`mainBtn flex row ${isCentered && 'hCenter'}`} style={buttonStyle}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}
            <p>{labelText}</p>
        </button>   
    )
}