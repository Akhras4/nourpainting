import React from "react"
import './home.sass'
import Nav from "../../components/navbar/nav"
const Home:React.FC=()=>{
return(
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
        <Nav></Nav>

    </div>
)
}
export default Home