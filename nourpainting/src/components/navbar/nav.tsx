import React, { useEffect, useRef, useState } from "react";
import './nav.sass';
import NavItem from "./navitem";
import { NavContent, LogoContent } from '../../content/nav';
import { motion } from "framer-motion";



const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationComplete, setAnimationComplete] = useState<boolean[]>([]);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (animationComplete.length === Object.values(NavContent).length) {
            itemsRef.current.forEach(item => {
                if (item) {
                    item.style.willChange = 'auto';
                }
            });
        }
        
    }, [animationComplete]);

    const handleAnimationComplete = (index: number) => {
        setAnimationComplete(prev => {
            const newArray = [...prev];
            newArray[index] = true;
            return newArray;
        });
    };

    return (
        <header>
            <div className={isOpen ? "NavItemWrpper openNav" : "NavItemWrpper logo"}>
                <NavItem name={LogoContent.name} link={LogoContent.link} videoSrc={LogoContent.videoSrc} />
            </div>
            {!isOpen && (
                <div onClick={() => setIsOpen(true)} className="openmenue">
                    <h2>Menu</h2> <div className="circle"></div>
                </div>
            )}
            <nav className={isOpen ? "openNav" : ""}> 
                {isOpen && (
                    <div onClick={() =>setIsOpen(false)} className="close">
                        <h2>Close</h2><div className="circle"></div>
                    </div>
                )}
                {Object.values(NavContent).map((navItem, index) => (
                    <motion.div
                        className="NavItemWrpper"
                        key={index}
                        ref={el => itemsRef.current[index] = el!}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        onAnimationComplete={() => handleAnimationComplete(index)}
                    >
                        <NavItem
                            name={navItem.name}
                            link={navItem.link} 
                            videoSrc={navItem.videoSrc} 
                        />
                    </motion.div>
                ))}
            </nav>
        </header>
    );
};

export default Nav;
