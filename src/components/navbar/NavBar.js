import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
   const searchIcon = <FontAwesomeIcon icon={faSearch} size='2x'/>
   return (
      <div className='header'>
         <div className='logo'>
            <img src='../../Images/Bunker-Store-Logo-Blanci.png' />
         </div>
         <div className='search'>
            <input className='standarInput' placeholder='Busca lo que quieras...'></input>
            <button className='searchButton'>{searchIcon}</button>
         </div>
         <div className='links'>
            <p className='link'>Home</p>
            <p className='link'>Productos</p>
            <p className='link'>Nosotros</p>
         </div>
      </div>
   )
}
