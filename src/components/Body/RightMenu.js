import React from "react";
import {NavLink} from "react-router-dom";
import './RightMenu.css'


export const RightMenu =()=>{
  return(
    <div className='rightNavigation'>
      <div className='Categories'>
        <p>Categories</p>
      </div>
      <div>
        <ul className='rightNavList'>
          <NavLink className='NavLink' to='/automatization'><li>Проектування систем автоматизації</li></NavLink>
          <NavLink className='NavLink' to='/electronic'><li>Виготовлення електронних пристроїв</li></NavLink>
          <NavLink className='NavLink' to='/automatic'><li>Розробка автоматики</li></NavLink>
          <NavLink className='NavLink' to='/modernization'><li>Модернізація та налаштування </li></NavLink>
          <NavLink className='NavLink' to='/web'><li>Розробка веб-сайтів</li></NavLink>
          <NavLink className='NavLink' to='/model'><li>3D-моделювання (Fusion360, SolidWorks)</li></NavLink>
        </ul>
      </div>
    </div>
  )
}