import React from 'react'
import './menubutton.css'

export const MenuButton = () => {

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
