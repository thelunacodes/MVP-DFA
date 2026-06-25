import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css"
import FooterInfo from "../FooterInfo/FooterInfo";

export default function Footer() {
    const contactInfoList = [{icon: faWhatsapp, text:'(xx) xxxxx-xxxx'},
                            {icon: faEnvelope, text:'xxxxxx@email.com'},
                            {icon: faXTwitter, text:'@xxxxxxxx'},
                            {icon: faInstagram, text:'xxxxxxxx.xxxx'}                       
    ]

    const helpInfoList = [{icon: null, text: 'Your Account'},
                        {icon: null, text: 'Frequent Questions'},
                        {icon: null, text: 'Deliveries and Shipping'},
                        {icon: null, text: 'Returns and Refund'},
    ]

    const paymentInfoList = [{icon: null, text: 'Payment Methods'},
                        {icon: null, text: 'Score'},
                        {icon: null, text: 'Gift Cards'}
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
            <div className="flex column footerInfoContainer" >
                <div className="flex row hCenter footer footerInfo">
                    <FooterInfo footerInfoTitle="Contact" footerInfoItems={contactInfoList}/>
                    <FooterInfo footerInfoTitle="Help" footerInfoItems={helpInfoList}/>
                    <FooterInfo footerInfoTitle="Payment" footerInfoItems={paymentInfoList}/>
                </div>
                <div className="flex row hCenter footer footerBottomRow">
                    <p className="infoLink" onClick={() => wowSecret()}>Terms of Use</p><p>|</p> 
                    <p className="infoLink">Privacy</p><p>|</p>
                    <p className="infoLink">Cookies</p><p>|</p>
                    <p className="infoLink">Advertisement</p>
                </div>
                <div className="flex row hCenter footer footerBottomRow footerCopyrightInfo">
                    <p className="infoLink">© 1567-2026 AwesomeShop.com Inc. or its affiliates</p> 
                    
                </div>
            </div>
            
        </div>
    )
}