import React from 'react'
import {Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className = "footer-container">
        <div className= "footerleft">
                <img src={""} alt="k" ></img>
                <p style={{fontSize:"1.5rem",fontWeight:"800",color:"purple"}}>CODE8estate</p>
        </div>
        <div className="f-cent">
            <div><Link to ="/about"style={{textDecoration:"none",color:"grey"}}>About us</Link></div>
            <div><Link to ="/contact" style={{textDecoration:"none",color:"grey"}}>Contact</Link></div>
            <div><Link to ="/terms" style={{textDecoration:"none",color:"grey"}}>Privacy|terms</Link></div>
        </div>
        <div className="footerright">
            <p style={{color:"grey"}}>Email:www.code8estate@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer