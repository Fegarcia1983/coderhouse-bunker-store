import React from 'react'
import './menubutton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const MenuButton = () => {
   const menuIcon = <FontAwesomeIcon icon={faBars} size='2x'/>
   return (
      <div class="dropdown">
         <div class="dropbtn">MENU</div>
            <div class="dropdown-content">
               <a href="#">home</a>
               <a href="#">productos</a>
               <a href="#">nosotros</a>
            </div>
      </div>
   )
   }
