import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { MenuButton } from './menu-button/MenuButton'
import { CartWidget } from './cart-widget/CartWidget'
import { UserWidget } from './user-widget/UserWidget'

import logo from '../../assets/images/logoBSW.png'

import './navbar.css'

export default function NavBar() {
   const searchIcon = <FontAwesomeIcon icon={faSearch} size='2x'/>
   return (
      <div className='header'>
         < MenuButton />
         <div className='logo'>
            <Link to="/"><img src={logo} alt='logo' /></Link>
         </div>
         <div className='search'>
            <input className='standarInput' placeholder='Busca lo que quieras...'></input>
            <button className='searchButton'>{searchIcon}</button>
         </div>
         <div className='cartUser'>
            < CartWidget />
            < UserWidget />
         </div>
      </div>
   )
}
