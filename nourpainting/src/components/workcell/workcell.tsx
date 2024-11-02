import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import './workcell.sass';

interface WorkCellProps {
    posterImg: string;
    name: string;
    title: string;
    videoSrc: string;
}

const WorkCell: React.FC<WorkCellProps> = ({ posterImg, name, videoSrc }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

    useEffect(() => {
        // Update mobile state on screen resize
        const handleResize = () => setIsMobile(window.innerWidth <= 450);
        window.addEventListener("resize", handleResize);

        // Autoplay video on mobile screens
        if (isMobile && videoRef.current) {
            videoRef.current.play();
        }

        // Clean up event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsHovered(true);
            videoRef.current?.play();
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
            videoRef.current?.pause();
            videoRef.current!.currentTime = 0;
        }
    };

    return (
        <motion.div 
            className="work-cell" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="case">
                <div className="name">{name}</div>
            </div>
            <div className="work-cell__poster">
                {/* Conditionally render based on screen size */}
                {!isMobile && !isHovered && <img src={posterImg} alt={name} />}
                
                <video 
                    ref={videoRef} 
                    src={videoSrc} 
                    className={(isMobile || isHovered) ? "show" : "hide"} 
                    muted 
                    loop
                />
            </div>
        </motion.div>
    );
};

export default WorkCell;
