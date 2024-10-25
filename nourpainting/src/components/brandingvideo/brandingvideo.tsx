import React from 'react'
import './brandingvideo.sass'
interface BrandingVideoProps {
    videoSrc:string
}

const BrandingVideo:React.FC<BrandingVideoProps>=({videoSrc})=>{
    return(
        <div className="videoBrandigCon">
          <video src={videoSrc} autoPlay  muted />
        </div>
    )
}
export default BrandingVideo