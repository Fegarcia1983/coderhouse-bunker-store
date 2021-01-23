import React from 'react'
import './menubutton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export const MenuButton = () => {
   const menuIcon = <FontAwesomeIcon icon={faBars} color='#E9E9E9E9'/>

   return (
      <div className="dropdown">
         <div className="dropbtn"><span>{menuIcon}</span>MENU</div>
            <div className="dropdown-content">
               <Link to={'/'}>home</Link>
               <Link to={'/products'}>productos</Link>
               <Link to={'/us'}>nosotros</Link>
            </div>
      </div>
   )
   }
