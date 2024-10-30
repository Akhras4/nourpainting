import React from "react"
import './home.sass'
import Nav from "../../components/navbar/nav"
import homeContent from '../../content/homecontent'
import SideText from '../../components/sideText/sidetext'
import HomeTextSvg from "../../components/texts/hometextsvg"
import BrandingVideo from "../../components/brandingvideo/brandingvideo"
import HomeTextGoodAt from "../../components/texts/hometextgoodat"
import ServiceItem from "../../components/services/services"
import GridClient from "../../components/griditems/gridClint"
import FooterContactText from "../../components/texts/footerContactText"
import FooterInfo from "../../components/footer/footer"
import MovingLines from "../../components/movinglines/movinglines"



const Home:React.FC=()=>{
 
return(
  <div>
    <div className="section1">
         <div className="background-hero" style={{ willChange: 'opacity', opacity: 1 }}>
      <div className="gradient-background hero">
        <div
          className="light-blue-gradient"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1.96047, 1.96047, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        />
        <div
          className="bright-blue-gradient-2"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1.62445, 1.62445, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
    <div className="section2">
        <Nav></Nav>
        <SideText text={homeContent.text} />
        <HomeTextSvg />
    </div>   
        <BrandingVideo  videoSrc={homeContent.videoBranding}/>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eum maiores repellendus dolor error tempore mollitia accusamus praesentium laboriosam quam? Vero neque id velit illum animi minima nihil. At, dolorem?</div>
        <HomeTextGoodAt  />
        <SideText text={homeContent.servicesText} isServicesText={true} />
        <ServiceItem service={homeContent.services} />
        <GridClient gridClient={homeContent.clientlogos} />
        <MovingLines />
    
    </div>
    <footer>
          <FooterContactText />
          <SideText  text={homeContent.servicesText} contactBarProps={homeContent.contactBar} />
          <FooterInfo />
    </footer>
    </div>
)
}
export default Home