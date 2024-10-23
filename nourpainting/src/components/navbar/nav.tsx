import React from "react"
import './nav.sass'
import Navitem from "./navitem"

const Nav:React.FC=()=>{
    return(
        <nav>
      <Navitem name="work" />
      <Navitem name="work" />
      <Navitem name="work" />
      <Navitem name="work" />
        </nav>
    )
}
export default Nav