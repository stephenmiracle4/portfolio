import React from 'react'
import './About.css'

// image

import aboutimg from '../../images/contact-img.png'

function About() {
  return (
    <>
    <div className='container'>
    <h1>About Me</h1>
    <div className='about'>

        <div className='about-img'>
            <img src={aboutimg} alt="AboutIMG" />
        </div>
        <div className='about-text'>I'm a Frontend developer, I'm passionate about solving problems and creating great user experiences and have a strong understanding of usability and accessibility standards. my skills include coding HTML, CSS, JavaScript, and React.  </div>
    </div>
    </div>
    </>
  )
}

export default About