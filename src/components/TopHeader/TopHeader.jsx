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

    useEffect(() => {
        if (inputIsFocused) {
        }

    }, [inputIsFocused])

    return (
        <header className="flex row vCenter" id="top-header-container">
            <div className="flex row">
                <div title="Return to homepage">
                    <FontAwesomeIcon icon={faCartShopping} id="store-icon" onClick={() => returnToHomePage()} />   
                </div>
                <p id="header-title" className="flex vCenter headerText">Awesome Store</p>
                <div id="top-header-search-container" className="vCenter">
                    <FontAwesomeIcon aria-label="Search" icon={faSearch} id="search-icon" onClick={() => searchProduct()} />
                    <input onBlur={() => setInputIsFocused(false)} 
                        onFocus={() => setInputIsFocused(true)} 
                        id="search-field" 
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
                <FontAwesomeIcon icon={faChevronDown} id="user-chevron"/>
            </div>
        </header>
    )
}