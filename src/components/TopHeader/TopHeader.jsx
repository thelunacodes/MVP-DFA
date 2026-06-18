import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./TopHeader.css"
import { faCartShopping, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { UseUserContext } from "../../UserContext"

export default function TopHeader() {
    const { username } = UseUserContext()
    let navigate = useNavigate();

    function returnToHomePage() {
        navigate("/");
    }

    return (
        <header className="flex row vCenter" id="top-header-container">
            <div className="flex row">
                <div title="Return to homepage">
                    <FontAwesomeIcon icon={faCartShopping} id="store-icon" onClick={() => returnToHomePage()} />   
                </div>
                <p id="header-title" className="flex vCenter headerText">Awesome Store</p>
                <div id="top-header-search-container" className="vCenter">
                    <FontAwesomeIcon icon={faSearch} id="search-icon" />
                    <input id="search-field" type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="flex row hCenter">
                <p className="headerText vCenter">Welcome, {username}!</p>
                <FontAwesomeIcon icon={faChevronDown} id="user-chevron"/>
            </div>
        </header>
    )
}