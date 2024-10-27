import React from "react";
import GridItem from "./griditem";
import './gridclient.sass'

interface GridClientItem {
    itemImgSrc1ST: string;
    itemImgAlt1ST: string;
    itemImgSrc2ST: string;
    itemImgAlt2ST: string;
    animateY:number;
    animateX:number;
    initialY:number,
    initialX:number,
    

}

interface GridClientProps {
    gridClient: Record<string & Number, GridClientItem>;
}

const GridClient: React.FC<GridClientProps> = ({ gridClient }) => {
    return (
        <div className="grid-client">
            {Object.values(gridClient).map((item, index) => (
                <GridItem key={index} {...item} />
            ))}
        </div>
    );
};

export default GridClient;

