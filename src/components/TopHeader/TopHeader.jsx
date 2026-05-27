import "./TopHeader.css"

export default function TopHeader() {
    const username = "User"

    return (
        <header className="flex row vCenter" id="top-header-container">
            <div className="flex row">
                {/* TODO: logo aqui */}
                <p className="flex vCenter headerText">Awesome Store</p>
                <div id="top-header-search-container" className="vCenter">
                    <i id="lupa-placeholder"> </i>
                    <input id="search-field" type="text" placeholder="Search..." />
                </div>
            </div>
            <div>
                <p className="headerText vCenter">Welcome, <b>{username}</b></p>
                {/* TODO: setinha pra baixo */}
            </div>
        </header>
    )
}