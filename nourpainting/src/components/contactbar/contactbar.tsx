
import React from "react"
import './contactbar.sass'
interface contactBarProps  {
    imgSrc:string;
    telfoneNumbar:string;
    eamilAddress:string

}
const ContactBar:React.FC<contactBarProps>=({
    imgSrc,
    telfoneNumbar,
    eamilAddress
})=>{
    const whatsappNumber = telfoneNumbar.replace(/\s+/g, ''); // Remove spaces for WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    return (
    <div className="contact-bar">
        <img src={imgSrc}/>
        <div className="contact-bar__info">
        <div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    {telfoneNumbar}
            </a>
        </div>
        <div>
             <a href={`mailto:${eamilAddress}`}>{eamilAddress}</a>
        </div>
        </div>
    </div>
    )
}
export default ContactBar