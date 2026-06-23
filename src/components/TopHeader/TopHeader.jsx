import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./TopHeader.css"
import { faCartShopping, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { useEffect, useRef, useState } from "react"
import { UseUserContext } from "../../UserContext"

export default function TopHeader() {
    const { username } = UseUserContext()
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ inputIsFocused, setInputIsFocused ] = useState(false);

    let navigate = useNavigate();

    function returnToHomePage() {
        navigate("/");
    }

    function searchProduct() {
        if (searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`)
        }
    }

    return (
        <header className="topHeaderContainer flex row vCenter">
            <div className="flex row">
                <div title="Return to homepage">
                    <FontAwesomeIcon icon={faCartShopping} className="storeIcon" onClick={() => returnToHomePage()} />   
                </div>
                <p className="flex vCenter headerText headerTitle">Awesome Store</p>
                <div className="topHeaderSearchContainer vCenter">
                    <FontAwesomeIcon aria-label="Search" className="searchIcon" icon={faSearch} onClick={() => searchProduct()} />
                    <input onBlur={() => setInputIsFocused(false)} 
                        onFocus={() => setInputIsFocused(true)} 
                        className="searchField" 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                searchProduct();
                            }
                        }}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex row hCenter">
                <p className="headerText vCenter">Welcome, {username}!</p>
                <FontAwesomeIcon icon={faChevronDown} className="userChevron"/>
            </div>
        </header>
    )
}