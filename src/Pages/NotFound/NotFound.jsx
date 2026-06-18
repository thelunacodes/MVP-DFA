import "./NotFound.css"
import TopHeader from "../../components/TopHeader/TopHeader"
import CustomButton from "../../components/CustomButton/CustomButton"
import { useNavigate } from "react-router"

export default function NotFound() {
    let navigate = useNavigate();

    function returnToHome() {
        navigate("/")
    }

    return (
        <div className="mainPageContainer flex column">
            <TopHeader />
            <div className="pageContentContainer flex column vCenter">
                
                <h1 id="not-found-header">404</h1>
                <h3 id="not-found-subheader">Page not found!</h3>
                
                <div id="home-btn-container" className="flex column">
                    <CustomButton  onClick={returnToHome} labelText="Return To Home"/>
                </div>

            </div>
            
        </div>
    )
}