import React from "react"

interface sideTextProps {
    text: string;
}

const SideText:React.FC<sideTextProps>=({text})=>{
    return (
        <div className="side-text">
             {text}
        </div>
    )
}
export default SideText