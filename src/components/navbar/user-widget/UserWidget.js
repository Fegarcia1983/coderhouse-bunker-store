import React from 'react'
import './userWidget.css'
import userIcon from '../../../assets/images/User.svg'
import { Link } from 'react-router-dom'

export const UserWidget = () => {
   return (
      <>
         < Link to={'/'} >
            <img src={userIcon} alt='LogoUser' className="logos"/>
         </Link>
      </>
   )
}
