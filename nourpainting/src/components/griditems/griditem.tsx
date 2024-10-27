import React from "react";
import { motion } from "framer-motion";

interface GridItemProps {
    itemImgSrc1ST: string;
    itemImgAlt1ST: string;
    itemImgSrc2ST: string;
    itemImgAlt2ST: string;
    animateY:number,
    animateX:number
    initialY:number,
    initialX:number
}

const GridItem: React.FC<GridItemProps> = ({
    itemImgSrc1ST,
    itemImgAlt1ST,
    itemImgSrc2ST,
    itemImgAlt2ST,
    animateY,
    animateX,
    initialY,
    initialX
}) => {
    console.log(animateY,
        animateX,
        initialY,
        initialX)
    return (
        <div className="grid-item" style={{ position: "relative" }}>
            {/* First Image */}
            <motion.div
                initial={{ y:initialY, opacity: 0 }}
                animate={{
                    y: [ animateY ,0],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 4,
                }}
                style={{ position: "absolute",display:"flex",justifyContent:"center" }}
            >
                <img src={itemImgSrc1ST} alt={itemImgAlt1ST} />
            </motion.div>

            {/* Second Image */}
            <motion.div
                initial={{ x:initialX, opacity: 0 }}
                animate={{
                    x: [animateX,0 ],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 4, 
                }}
                style={{ position: "absolute",display:"flex",justifyContent:"center" }}
            >
                <img src={itemImgSrc2ST} alt={itemImgAlt2ST} />
            </motion.div>
        </div>
    );
};

export default GridItem;

