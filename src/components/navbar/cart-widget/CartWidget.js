import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import cartIcon from '../../../assets/images/Caja.svg'
import './cartwidget.css'

export const CartWidget = () => {

   const { itemsInCart, qtyInCart} = useContext(CartContext);

   return (
      <>
         < Link to={'/cart'} >
            <img src={cartIcon} alt='LogoCart' className="logos"/>
            {
               qtyInCart > 0 &&
            <p className="fg-cartNumber">{itemsInCart}</p>
            }
            {
               qtyInCart > 0 &&
            <p className="fg-qtyNumber">{qtyInCart}</p>
            }
         </ Link >
      </>
   )
}
