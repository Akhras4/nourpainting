
import React from "react"
import './sideText.sass'


interface sideTextProps {
    text: string[];
}

const SideText:React.FC<sideTextProps>=({text})=>{
    return (
        <div className="sideTextCon">
        <div className="right"></div>
        <div className="right">
            {text.map((text, index) => (
                <div className="sideText" key={index}>{text}</div>
            ))}
        </div>
        </div>
    )
}
export default SideText