import React from "react"
import './nav.sass'
interface NavItemProps{
    name:string;
    // video:string
}

const Navitem:React.FC<NavItemProps> =({

    name,
    // video
})=>{
return(
    <>
        <div className="NavItemCon">
            <h1 className="NavItemText">{name}</h1>
            <div className="bg"></div>
            <video
                className="NavItemVideo"
                src="https://player.vimeo.com/progressive_redirect/playback/1020110752/rendition/360p/file.mp4?loc=external&signature=310e20745ec15c295a25ea6ca6801e63e4f335e8d0d7dfe1a55b8547257a07d7"
                autoPlay
                muted
                loop
                controls={false}  // Optional: hide the controls if you don't need them
                ></video>
        </div>
    </>
)
}
export default Navitem