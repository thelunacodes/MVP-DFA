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
        const container = document.querySelector('.mainPageContainer');

        container.scrollTo({
        top: 0, 
        left: 0
        });
    }

    function wowSecret() {
        window.open('https://youtu.be/dQw4w9WgXcQ?si=Gfnhut7LPHEBpNpR', '_blank');
    }

    return (
        <div className="footerContainer">
            <div className="returnToTopBtn flex row hCenter vCenter" onClick={() => returnToTop()}>
                <FontAwesomeIcon icon={faChevronUp} />
                <p className="returnToTopLabel"> Return to Top</p>
                <FontAwesomeIcon icon={faChevronUp} />
            </div> 
            <div className="flex column" >
                <div className="flex row hCenter footer footerInfo">
                    {/* "Contact" column */}
                    <div  className="flex column infoColumn">
                        <h3 className="infoHeader semibold">Contact</h3>
                        
                            {contactInfoList.map((info, key) => 
                                <div key={key} className="flex row contactInfoRow"> 
                                    <FontAwesomeIcon icon={info.icon} className="contactInfoIcon"/>
                                    <p className="contactInfoText">{info.text}</p>
                                </div>
                            )}
                        
                    </div>
                    {/* "Help" column */}
                    <div  className="flex column infoColumn">
                        <h3 className="infoHeader semibold centeredText">Help</h3>
                        <p className="infoLink">Your Account</p>
                        <p className="infoLink">Frequent Questions</p>
                        <p className="infoLink">Deliveries and Shipping</p>
                        <p className="infoLink">Returns and Refund</p>    
                    </div>
                    {/* "Payment column" */}
                    <div  className="flex column infoColumn">
                        <h3 className="infoHeader semibold centeredText">Payment</h3>
                        <p className="infoLink">Payment Methods</p>
                        <p className="infoLink">Score</p>
                        <p className="infoLink">Gift Cards</p>
                    </div>
                </div>
                <div className="flex row hCenter footer footerBottomRow">
                    <p className="infoLink" onClick={() => wowSecret()}>Terms of Use</p><p>|</p> 
                    <p className="infoLink">Privacy</p><p>|</p>
                    <p className="infoLink">Cookies</p><p>|</p>
                    <p className="infoLink">Advertisement</p>
                </div>
                <div className="flex row hCenter footer footerBottomRow footerCopyrightInfo">
                    <p>© 1567-2026 AwesomeShop.com Inc. or its affiliates</p> 
                    
                </div>
            </div>
            
        </div>
    )
}