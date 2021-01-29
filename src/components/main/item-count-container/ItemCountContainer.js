import React, { useState } from 'react'
import { ItemCount } from '../item-count/ItemCount'
import './itemCountContainer.css'

export const ItemCountContainer = ( { stock=10, initial=1, onAdd=1 } ) => {

   const [value, setValue] = useState(initial)

   const handlePlus = () => {
      !(value === stock) && setValue(value + onAdd)
   }

   const handleMinus = () => {
      !(value === onAdd) && setValue(value -onAdd)
   }

   return (
      <div className="fg-counter">
         < ItemCount
            value={ value }
            stock={ stock }
            initial={ initial }
            handlePlus={ handlePlus }
            handleMinus={ handleMinus }
         />
         <div>
            <p>Stock: {stock}</p>
         </div>
      </div>
   )
}
