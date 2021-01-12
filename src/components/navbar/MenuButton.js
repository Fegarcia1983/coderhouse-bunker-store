import React from 'react'
import './menubutton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const MenuButton = () => {
   const menuIcon = <FontAwesomeIcon icon={faBars} color='#E9E9E9E9'/>

   return (
      <div className="dropdown">
         <div className="dropbtn"><span>{menuIcon}</span>MENU</div>
            <div className="dropdown-content">
               <a href="#">home</a>
               <a href="#">productos</a>
               <a href="#">nosotros</a>
            </div>
      </div>
   )
   }
