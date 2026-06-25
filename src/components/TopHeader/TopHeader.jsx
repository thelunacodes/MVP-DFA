import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faChevronDown, faChevronUp, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { useState } from "react"

import { UseUserContext } from "../../UserContext"
import CardBox from "../CardBox/CardBox"
import "./TopHeader.css"

export default function TopHeader() {
    const { username } = UseUserContext()
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ showChevronMenu, setShowChevronMenu] = useState(false);

    let navigate = useNavigate();

    function returnToHomePage() {
        navigate("/");
    }

    function searchProduct() {
        if (searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`)
        }
    }

    const chevMenuMockOptions = ["Account", "Orders", "Wishlist", "Browsing History", "Recommendations", "Settings"]

    return (
        <>
            <header className="topHeaderContainer flex row">
                {/* Mobile Side Menu button */}
                <div className="mobileSideMenuBtn">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                
                <div className="flex row">
                    
                    <div title="Return to homepage">
                        <FontAwesomeIcon icon={faCartShopping} className="storeIcon" onClick={() => returnToHomePage()} />   
                    </div>
                    <p className="flex vCenter headerText headerTitle">Awesome Store</p>
                    <div className="topHeaderSearchContainer vCenter">
                        <div title="Search" className="searchIconContainer">
                            <FontAwesomeIcon className="searchIcon" icon={faSearch} onClick={() => searchProduct()} />  
                        </div>
                        <input className="searchField" 
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
                <div className="userMenuContainer">
                    <div className="flex row hCenter userDiv">
                        <p className="headerText flex vCenter userGreeting">Welcome, {username}!</p>
                        <FontAwesomeIcon onClick={() => setShowChevronMenu(!showChevronMenu)} icon={showChevronMenu ? faChevronUp : faChevronDown} className="userChevron flex hCenter "/>
                    </div>
                    {showChevronMenu &&
                        <div className="chevronMenuContainer">
                            <CardBox
                                cardContent={
                                    <div className="flex column chevMenuOptionsContainer">
                                        {chevMenuMockOptions.map((option, idx) => (
                                            <div key={idx} className="chevMenuOption">{option}</div>
                                        ))}
                                        <div className="divider chevDivider"></div>
                                        <div className="chevMenuOption signOutOption flex row vCenter">
                                            <FontAwesomeIcon className="signOutIcon" icon={faRightFromBracket} />
                                            <p className="flex">Sign out</p> 
                                        </div>
                                    </div>
                                    
                                }
                            />
                        </div>
                    }
                </div>
                
                {/* Mobile Search Button */}
                <div className="mobileSearchIcon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </header>
        </>
    )
}