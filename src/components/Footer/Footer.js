import React from "react";
import './Footer.css'
import img from './xeo 2.JPG'

export const Footer = () =>{
  return(
    <div className='footer'>
      <div className='footerBody'>
          <div className='footerLeft'>
            <div>
              <img className='imgFooter' src={img} alt=""/>
            </div>
            <div className='footerText'>
              <p>Call us: <span>+380668327472</span></p>
              <p>Email us : <span>xeonics.technology@gmail.com</span></p>
              <p>xeonics-technology.com</p>
              <br/>
              <p>Opening Hours</p>
              <p>Monday - Friday: 9:00am - 7:00pm</p>
            </div>

          </div>
      </div>
    </div>
  );
}