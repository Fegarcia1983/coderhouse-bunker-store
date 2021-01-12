import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logoBSW.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { MenuButton } from './MenuButton'
import { CartWidget } from './CartWidget'
import { UserWidget } from './UserWidget'

export default function NavBar() {
   const searchIcon = <FontAwesomeIcon icon={faSearch} size='2x'/>
   return (
      <div className='header'>
         < MenuButton />
         <div className='logo'>
            <img src={logo} alt='logo' />
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
