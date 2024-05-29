import React from 'react'
import "./portfolio.css"
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import image from "../assets/img/image.png";
function Portfolio() {
    
    
    return (
        <div  id="section1">
            {/* header of homepage */}
        <div className='head'>
            
           
           

           
           
           <nav class="navbar fixed-top navbar-light bg-light">
           <h2 className='aa'>Portfolio</h2> 
  
          <div className='nav'>
           <a href='#section1' className='navbar-brand'>Home</a>
            <a href='#section2'className='navbar-brand'>Aboutme</a>
           <a href='#section3'className='navbar-brand'>  Skills</a>
            <a href='#section4'className='navbar-brand' >Projects</a>
            <a href='#section5'className='navbar-brand' > Contact</a>
            </div>
            </nav>
            
        <div className="bb">
                <img src={image} height="200px" width="200px"/>
                
           <h1 className='nam'>Dhivya.S</h1><br/>
           <h3 className='nom'><span className='fro'>Frontend Developer</span></h3>
           <div >
           <FaInstagram className='mon' /><FiTwitter className='mon' /><CiLinkedin className='mon' /><FaFacebookSquare className='mon'/><FaWhatsapp className='mon'/><br/><br/>
           <button className='but'>Download CV</button>
           </div>
            </div> 
             
            
            
            
            
            
            </div>    
             














        </div>
    )
}
export default Portfolio