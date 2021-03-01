import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'

export const ItemCount =  ( {stock, order, addQtyHandler, subQtyHandler} ) => {

   const plusItem = <FontAwesomeIcon icon={faPlusSquare} size='1x'/>
   const minusItem = <FontAwesomeIcon icon={faMinusSquare} size='1x'/>

   return (
      <div className='fg-itemCount'>
         <div className='fg-itemCommand'>
            <button className={(order.qty===stock)?'fg-buttonDisabled':''} onClick={ addQtyHandler } >{ plusItem }</button>
            <input readOnly value={ order.qty }></input>
            <button className={(order.qty===0)?'fg-buttonDisabled':''} onClick={ subQtyHandler }>{ minusItem }</button>
         </div>
      </div>
   )
}
