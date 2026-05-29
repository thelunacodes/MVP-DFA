import "./NotFound.css"
import TopHeader from "../../components/TopHeader/TopHeader"
import Footer from "../../components/Footer/Footer"

export default function NotFound() {
    

    return (
        <div>
            <TopHeader />
            <div id="not-found-container" className="flex column vCenter">
                <h1>404</h1>
                <h3>Page not found!</h3>
                <p id="return-to-home">Click here to return to the Homepage!</p>

            </div>
        </div>
    )
}