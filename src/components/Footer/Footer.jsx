import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.css"
import { faChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const contactInfoList = [{icon: faWhatsapp, text:'(xx) xxxxx-xxxx'},
                            {icon: faEnvelope, text:'xxxxxx@email.com'},
                            {icon: faXTwitter, text:'@xxxxxxxx'},
                            {icon: faInstagram, text:'xxxxxxxx.xxxx'}                       
    ]


    function returnToTop() {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }

    return (
        <div id="footer-container">
            <div id="return-to-top-btn" onClick={() => returnToTop()} className="flex row hCenter">
                <FontAwesomeIcon icon={faChevronUp} />
                <p id="return-to-top-label"> Return to Top</p>
                <FontAwesomeIcon icon={faChevronUp} />
            </div> 
            <div className="flex column" >
                <div className="flex row hCenter footer" id="footer-info">
                    {/* "Contact" column */}
                    <div  className="flex column infoColumn">
                        <h3 id="info-header" >Contact</h3>
                        
                            {contactInfoList.map((info, key) => 
                                <div key={key} className="flex row contactInfoRow"> 
                                    <FontAwesomeIcon icon={info.icon} className="contactInfoIcon"/>
                                    <p className="contactInfoText">{info.text}</p>
                                </div>
                            )}
                        
                    </div>
                    {/* "Help" column */}
                    <div  className="flex column infoColumn">
                        <h3 id="info-header">Help</h3>
                        <p class="infoLink">Your Account</p>
                        <p class="infoLink">Frequent Questions</p>
                        <p class="infoLink">Deliveries and Shipping</p>
                        <p class="infoLink">Returns and Refund</p>    
                    </div>
                    {/* "Payment column" */}
                    <div  className="flex column infoColumn">
                        <h3 id="info-header">Payment</h3>
                        <p class="infoLink">Payment Methods</p>
                        <p class="infoLink">Score</p>
                        <p class="infoLink">Gift Cards</p>
                    </div>
                </div>
                <div className="flex row hCenter footer footerBottomRow">
                    <p class="infoLink">Terms of Use</p><p>|</p> 
                    <p class="infoLink">Privacy</p><p>|</p>
                    <p class="infoLink">Cookies</p><p>|</p>
                    <p class="infoLink">Advertisement</p>
                </div>
                <div id="footer-copyright-info" className="flex row hCenter footer footerBottomRow">
                    <p>© 1567-2026 AwesomeShop.com Inc. or its affiliates</p> 
                    
                </div>
            </div>
            
        </div>
    )
}