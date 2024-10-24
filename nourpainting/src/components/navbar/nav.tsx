import React, { useEffect, useRef, useState } from "react";
import './nav.sass';
import NavItem from "./navitem";
import NavContent from '../../content/nav';
import { motion } from "framer-motion"; 

const Nav: React.FC = () => {
    const [animationComplete, setAnimationComplete] = useState<boolean[]>([]);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // After the animations are complete, set will-change to auto
        if (animationComplete.length === Object.values(NavContent).length) {
            itemsRef.current.forEach(item => {
                if (item) {
                    item.style.willChange = 'auto'; // Reset will-change property
                }
            });
        }
    }, [animationComplete]);

    const handleAnimationComplete = (index: number) => {
        setAnimationComplete(prev => {
            const newArray = [...prev];
            newArray[index] = true; // Mark this animation as complete
            return newArray;
        });
    };

    return (
        <nav>
            {Object.values(NavContent).map((navItem, index) => (
                <motion.div
                    className="NavItemWrpper"
                    key={index}
                    ref={el => itemsRef.current[index] = el!} // Store the ref for each item
                    initial={{ opacity: 0, y: 20 }} // Start hidden and moved down
                    animate={{ opacity: 1, y: 0 }} // End visible and in position
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Sequential delay
                    onAnimationComplete={() => handleAnimationComplete(index)} // Call function on complete
                >
                    <NavItem
                        name={navItem.name}
                        link={navItem.link} 
                        videoSrc={navItem.videoSrc} 
                    />
                </motion.div>
            ))}
        </nav>
    );
}

export default Nav;
