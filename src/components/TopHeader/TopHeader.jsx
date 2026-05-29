import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./TopHeader.css"
import { faCartShopping, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons"

export default function TopHeader() {
    const username = "User"

    return (
        <header className="flex row vCenter" id="top-header-container">
            <div className="flex row">
                <FontAwesomeIcon icon={faCartShopping} id="store-icon" />
                <p id="header-title" className="flex vCenter headerText">Awesome Store</p>
                <div id="top-header-search-container" className="vCenter">
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                    <input id="search-field" type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="flex row hcenter">
                <p className="headerText vCenter">Welcome, <b>{username}</b></p>
                <FontAwesomeIcon icon={faChevronDown} id="user-chevron"/>
            </div>
        </header>
    )
}