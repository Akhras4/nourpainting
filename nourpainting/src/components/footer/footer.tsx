import React from "react"
import './footer.sass'
const FooterInfo:React.FC=()=>{
    return(
        <div className="footer">
            <div className="footer-left">
            <p>Copyright 2024</p>
            <a href=""> PRIVACY</a>
            <a href="">COOKIES</a>
            </div>
            <div className="footer-right">
               <a href="">TIKTOK</a>
               <a href="">INSTAGRAM</a>
               <a href="">YOUTUBE</a>
               <a href="">LINKDIN</a>
            </div>
        </div>
    )
}
export default FooterInfo