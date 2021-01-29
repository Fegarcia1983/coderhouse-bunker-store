import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'

export const ItemCount = ( { value, stock, initial, handlePlus, handleMinus } ) => {

   const plusItem = <FontAwesomeIcon icon={faPlusSquare} size='2x'/>
   const minusItem = <FontAwesomeIcon icon={faMinusSquare} size='2x'/>

   return (
      <div className='fg-itemCount'>
         <div className='fg-itemCommand'>
            <button className={(value===stock)?'fg-buttonDisabled':''} onClick={handlePlus}>{plusItem}</button>
            <input readOnly value={value}></input>
            <button className={(value===initial)?'fg-buttonDisabled':''} onClick={handleMinus}>{minusItem}</button>
         </div>
      </div>
   )
}
