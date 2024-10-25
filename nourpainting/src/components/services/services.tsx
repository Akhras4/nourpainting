import React from "react";
import Navitem from "../navbar/navitem";
import './servicess.sass'
interface Service {
    name: string;
    link: string;
    videoSrc: string;
  }
  
  interface ServiceItemProps {
    service: Record<string, Service>;
  }

const ServiceItem:React.FC<ServiceItemProps>=({service})=>{
    return (
        <>
        <div className="service-item">
      {Object.values(service).map((item, index) => (
        <Navitem key={index}  {...item} />
      ))}
    </div>
        </>
        );
}
export default ServiceItem