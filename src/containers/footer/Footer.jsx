import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img alt="logo" src={logo}/>
          <p>Crecherwoord K12 182 DK Alkanjcko. All Rights Reserved.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crecherwoord K12 182 DK Alkanjcko</p>
          <p>085-132567</p>
          <p>info@ayment.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer