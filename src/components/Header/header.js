import React from "react";
import {NavLink} from "react-router-dom";
import './header.css'
import logo from './Xeonix logo.JPG'

export const Header = ()=>{
  return(
    <div className='headerBody'>
      <div className='header'>
        <div className='headerLeftSection'>
          <div className='headerLogoContainer'>
            <img className='logo' src={logo} alt=""/>
          </div>
          <div className='navContainer'>
            <ul className='list'>
              <NavLink className='decoration' activeClassName='green' to='/'><li>Home</li></NavLink>
              <NavLink className='decoration' activeClassName='green' to='/about'><li>About</li></NavLink>
              <NavLink className='decoration' activeClassName='green' to='/contacts'><li>Contacts</li></NavLink>
            </ul>
          </div>

        </div>
        <div className='headerRightSection'>
          <div className='rightSectionTop'>

          </div>
          <div className='rightSectionMiddle'>
            <p className='headerRightTextNumber floatRight'>
              Customer Service:
              <span className='phoneNumber'> +380668327472</span>
            </p>
            <p className='headerRightTextNumber floatRight'>
              Email us:
              <span className='phoneNumber'> xeonics.technology@gmail.com</span>
            </p>
            <p className='fontLightGrey floatRight'>
              Calling customer service is free of charge
            </p>
            <p className='fontLightGrey floatRight'>
              Monday - Friday 9am - 7pm
            </p>
          </div>
          <div className='rightSectionDown'>

          </div>
        </div>

      </div>
    </div>
  );
};