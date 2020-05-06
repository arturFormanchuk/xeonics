import React from "react";
import './Contacts.css'
import about from './AboutImg.jpg'

export const Contacts = ()=>{
  return(
    <div>

      <div className='contactsText'>
        <h3>
          Контакти компанії
        </h3>

        <p>Email: <span>xeonics.technology@gmail.com</span></p>
        <p>Phone number: <span>+380668327472</span></p>

      </div>
    </div>
  );
}