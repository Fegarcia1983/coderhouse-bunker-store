import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export const CartDeleteButton = ( { item } ) => {

   const { deleteItem } = useContext(CartContext)

   return (
      <>
         <button className="fg-itemDelete" onClick={ () => deleteItem(item) }>Delete</button>
      </>
   )
}
