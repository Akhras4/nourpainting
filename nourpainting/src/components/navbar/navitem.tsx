import React, {  useEffect, useRef } from "react";
import './nav.sass';


interface NavItemProps {
    name: string;
    link:string;
    videoSrc:string
}

const Navitem: React.FC<NavItemProps> = ({ name,link,videoSrc }) => {
    const navItemRef = useRef<HTMLDivElement | null>(null);
    const logoItemRef = useRef<HTMLDivElement | null>(null);  
    const videoRef = useRef<HTMLVideoElement | null>(null); 
    const navItem = name === "logo" ? logoItemRef : navItemRef;
    const mouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play(); 
        }
    };

    const mouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause(); 
            videoRef.current.currentTime = 0; 
        }
    };

    useEffect(() => {
        
            const currentNavItem = navItemRef.current; 
            const currentNavItemLogo = logoItemRef.current; 
            const video = videoRef.current; 
            if (currentNavItemLogo && video) {
                video.play(); 
            }


        if (currentNavItem) {
            currentNavItem.addEventListener('mouseenter', mouseEnter);
            currentNavItem.addEventListener('mouseleave', mouseLeave);
        }


        return () => {
            if (currentNavItem) {
                currentNavItem.removeEventListener('mouseenter', mouseEnter);
                currentNavItem.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }, [navItem]);

    return (

        <a href={link}>
        <div className="NavItemCon" ref={navItem}>
            <div className="contentWrapper">
                <div className="textWrapper">
                    <h1 className="NavItemText">{name}</h1>
                    <h1 className="NavItemText secondary" >{name}</h1>
                </div>
            </div>
            <div className="bg"></div>
            <video
                ref={videoRef} 
                className="NavItemVideo"
                src={videoSrc}
                muted
                loop
                controls={false}  
            />
        </div>
        </a>
    );
};

export default Navitem;

