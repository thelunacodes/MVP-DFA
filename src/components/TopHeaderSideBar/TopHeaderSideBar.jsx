import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopHeaderSideBar.css"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function TopHeaderSideBar({sbDisplaySetter, options}) {
    function closeSideBar() {
        sbDisplaySetter(false);
    }


    return (
        <div className="darkBg" onClick={() => closeSideBar()} >
            <div className="sideBarContainer flex column" onClick={(e) => e.stopPropagation()}>
                <div className="sideBarOptionsContainer">
                    {options.map((opt, idx) => (
                        <div className="sideBarOption" key={idx}>
                            {opt}
                        </div>
                    ))}
                </div>
                <div className="divider sidebarDivider"></div>
                <div className="sideBarOption signOutOption flex">
                    <FontAwesomeIcon className="signOutIcon" icon={faRightFromBracket} />
                    <p>Sign out</p> 
                </div>
                
            </div>
        </div>
        
    )
}