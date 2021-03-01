import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../contexts/CartContext'
import './cartChangeQty.css'


export const CartChangeQty =  ( { item } ) => {

   const { cart, changeQty} = useContext(CartContext)

   const plusItem = <FontAwesomeIcon icon={faPlusSquare} size='1.5x'/>
   const minusItem = <FontAwesomeIcon icon={faMinusSquare} size='1.5x'/>

   return (
      <div className='fg-changeCount'>
         <div className='fg-changeCommand'>
            <button className={(cart[item-1].qty===cart[item-1].product.stock)?'fg-buttonDisabled':''} onClick={ () => changeQty(item,'up') }>{ plusItem }</button>
            <input readOnly value={ cart[item-1].qty }></input>
            <button className={(cart[item-1].qty===1)?'fg-buttonDisabled':''} onClick={ () => changeQty(item,'down') }>{ minusItem }</button>
         </div>
      </div>
   )
}