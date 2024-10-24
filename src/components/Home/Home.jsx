import React, { useState } from 'react'

import "./Home.css"

//image
import Profileimg from "../../images/profilepix.png"

// social media-icon
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from 'react-icons/ci'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa6"

// Navigationbar
// import { IoHome } from "react-icons/io5"
// import { FaPortrait } from 'react-icons/fa'
// import { RiContactsFill } from 'react-icons/ri'



const Home = () =>  {
  return (
    <>
    <div className='home'>

      <div className='home-content'>
        <h3>Hello, It's Me.</h3>
        <h1>Stephen Miracle</h1>
        <h2>And I'm a <span>Frontend Developer</span></h2>
        <p>I'm passionate about solving problem</p>

        <div className='social-media'>
          <li><a href="https://github.com/stephenmiracle4"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/miracle-stephen-9b10a62a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin/></a></li>
          <li><a href="https://x.com/Jesusprincess55?t=v7c9__aPBVKVcwvojPaJRg&s=09"><FaTwitter/></a></li>
          <li><a href="https://www.facebook.com/miracle.stephen.9085?mibextid=ZbWKwL"><FaFacebookF/></a></li>
        </div>

        <div className='button'>
          <button className='btn'> <a href="https://www.linkedin.com/in/miracle-stephen-9b10a62a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Download CV</a></button>
          
          <button className='btn'> <a href="https://www.linkedin.com/in/miracle-stephen-9b10a62a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Hire Me</a></button>
        </div>
      </div>

      <div className='image'>
        <img src={Profileimg} alt="Profilepix" />
      </div>
 
        {/* <Navigation>
        <li><a className='active' href="#"><IoHome/></a></li>
         <li><a href="#"><FaPortrait/></a></li>
        <li><a href="#"><RiContactsFill/></a></li> 
      </Navigation>  */}
         

        
    </div>
    
    </>
  )
}

export default Home