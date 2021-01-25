import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './menubutton.css'

export const MenuButton = () => {
   const menuIcon = <FontAwesomeIcon icon={faBars} color='#E9E9E9E9'/>

   return (
      <div className="dropdown">
         <div className="dropbtn"><span>{menuIcon}</span>MENU</div>
            <div className="dropdown-content">
               <Link to={'/'}>home</Link>
               <Link to={'/products'}>productos</Link>
               <Link to={'/us'}>nosotros</Link>
               <Dropdown.Divider />
               <Link to={'/category/1'}>categoria uno</Link>
               <Link to={'/category/2'}>categoria dos</Link>
            </div>
      </div>
   )
   }
