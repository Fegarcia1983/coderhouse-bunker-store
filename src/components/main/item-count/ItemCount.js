import React, { useState } from 'react'
import './itemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'


export const ItemCount = ({ stock, initial, onAdd }) => {

   const [value, setValue] = useState(initial)

   const handlePlus = () => {
      !(value === stock) && setValue(value + onAdd)
   }

   const handleMinus = () => {
      !(value === onAdd) && setValue(value -onAdd)
   }

   const plusItem = <FontAwesomeIcon icon={faPlusSquare} size='2x' color='black'/>
   const minusItem = <FontAwesomeIcon icon={faMinusSquare} size='2x' color='black'/>

   return (
      <div className='fg-itemCount'>
         <div className='fg-itemCommand'>
            <button onClick={handlePlus}>{plusItem}</button>
            <input readOnly value={value}></input>
            <button onClick={handleMinus}>{minusItem}</button>
         </div>
         <div>
            <p>Stock: {stock}</p>
         </div>
      </div>
   )
}
