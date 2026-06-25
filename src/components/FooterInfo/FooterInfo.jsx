import FooterInfoColumn from "../FooterInfoColumn/FooterInfoColumn"
import FooterInfoToggle from "../FooterInfoToggle/FooterInfoToggle"
import "./FooterInfo.css"

export default function FooterInfo({footerInfoTitle, footerInfoItems}){

    return (
        <>
            <div  className="flex column infoColumn">
                <FooterInfoColumn title={footerInfoTitle} items={footerInfoItems} />
            </div>

            <div className="infoColumnMobile">
                <FooterInfoToggle title={footerInfoTitle} items={footerInfoItems} />
            </div>
        </>
    )
}