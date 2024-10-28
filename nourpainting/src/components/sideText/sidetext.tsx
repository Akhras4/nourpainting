import React from "react";
import './sideText.sass';
import ContactBar from "../contactbar/contactbar";

interface SideTextProps {
    text: string[];
    isServicesText?: boolean;
    contactBarProps?: {
        imgSrc: string;
        telfoneNumbar: string;
        eamilAddress: string;
    }
}

const SideText: React.FC<SideTextProps> = ({ text, isServicesText, contactBarProps }) => {
    return (
        <div className="sideTextCon">
            <div className="left"></div>
            <div className="right">
                {text.map((textItem, index) => (
                    <div className={`sideText ${isServicesText ? 'servicesTextColor' : ''}`} key={index}>
                        {textItem}
                    </div>
                ))}
                {contactBarProps && <ContactBar {...contactBarProps} />}
            </div>
        </div>
    );
};

export default SideText;


