// import React, {useState} from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"


// social media-icon
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from 'react-icons/ci'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa6"

const Contact = () => {
    // const [name, setName] = useState ("")
    // const [email, setEmail] = useState ("")
    // const [message, setMessage] = useState ("")


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

  return (
    <>
        <div className='contact'>
                <div className='contact-left'>
                    <h1>Contact Me</h1>
                    <ul>
                        <p>
                            Connect with Me on Github
                        <li><a href="https://github.com/stephenmiracle4"><FaGithub/></a></li>
                        </p>

                        <p>
                           Connect with Me on Linkedin
                        <li><a href="https://www.linkedin.com/in/miracle-stephen-9b10a62a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin/></a></li>
                        </p>

                        <p>
                            Connect with Me on Twitter
                        <li><a href="https://x.com/Jesusprincess55?t=v7c9__aPBVKVcwvojPaJRg&s=09"><FaTwitter/></a></li>
                        </p>

                        <p>
                            Connect with Me on Facebook
                        <li>
                        <a href="https://www.facebook.com/miracle.stephen.9085?mibextid=ZbWKwL"><FaFacebookF/></a></li>
                        </p>
                    </ul>

                </div>

                
       {/*  <form action="">

        <p>
            <input className='input' type="text"
            placeholder='Your Name'
            value={name}onChange={(e) => setName(e.target.value)} />
        </p>

        <p>
            <input className='input' type="email"
            placeholder='Email'
            value={email}onChange={(e) => setEmail(e.target.value)} />
        </p>

        <p>
        <input className='input' type="text"
        placeholder='Your Message'
        value={message}onChange={(e) => setMessage(e.target.value)}
        />
         </p>

         <button type='submit' className='submitbtn'>Submit</button>

         </form> */}
<div className='contact-form'>
<h1> Message Me</h1>
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <p><input type="text" name="user_name" /></p>
      <label>Email</label>
      <p><input type="email" name="user_email" /></p>
      <label>Message</label>
      <p><textarea name="message" /></p>
      <input className='submitbtn' type="submit" value="Send" />
    </form>

     </div>
            
        </div>
    </>
  )
}

export default Contact