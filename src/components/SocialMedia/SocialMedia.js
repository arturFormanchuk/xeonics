import React from "react";
import './SocialMedia.css'

export const SocialMedia =()=>{
  return(
    <div className='socialMediaBody'>
      <div className='socialMediaTop'>
        <p>Follow us here:</p>
      </div>
      <div className='socialMediaMiddle'>
        <p>Join our social media community to get updates from us</p>
      </div>
      <div>
        <div className='socialPosition'>
          <div className='social'>
            <a href="https://www.facebook.com/xeonics.technology">
              <i className="fab fa-facebook-square facebookIco"/>
            </a>
          </div>
          <div className='social'>
            <a href="">
              <i className="fab fa-instagram instagramIco "/>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}