
import React from "react"
import './sideText.sass'


interface sideTextProps {
    text: string[];
    isServicesText?: boolean;
}

const SideText:React.FC<sideTextProps>=({text,isServicesText})=>{
    return (
        <div className="sideTextCon">
        <div className="left"></div>
        <div className="right">
            {text.map((text, index) => (
                <div className={`sideText ${isServicesText ? 'servicesTextColor' : ''}`} key={index}>{text}</div>
            ))}
        </div>
        </div>
    )
}
export default SideText