import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import './workcell.sass';

interface WorkCellProps {
    posterImg: string;
    name: string;
    title: string;
    videoSrc: string;
}

const WorkCell: React.FC<WorkCellProps> = ({ posterImg, name, title, videoSrc }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current?.play(); 
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current?.pause(); 
        videoRef.current!.currentTime = 0; 
    };

    return (
        <motion.div 
            className="work-cell" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="case">
                <div className="name">{name}</div>
                {/* <div className="title">{title}</div> */}
            </div>
            <div className="work-cell__poster">
                {!isHovered &&
                 <img src={posterImg} alt={name} />
                 }
                <video 
                    ref={videoRef} 
                    src={videoSrc} 
                    className={isHovered ? "show" : "hide"} 
                    muted 
                    loop
                ></video>
            </div>
        </motion.div>
    );
};

export default WorkCell;
