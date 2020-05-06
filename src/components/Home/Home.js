import React from "react";
import './Home.css'
import homeImg from './xeo1.JPG'

export const Home = ()=>{
  return(
    <div className='homeMain'>
      <div className='text'>
        <h2>Xeonics Technology - стартап, що знаходиться в м.Львів, який поєднує в собі спеціалістів різних галузей</h2>
      </div>
      <div>
        <img className='homeImg' src={homeImg} alt=""/>
      </div>

    </div>
  )
}