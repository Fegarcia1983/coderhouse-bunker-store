import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CartTableItem } from '../cart-table-item/CartTableItem'

export const CartTable = () => {

   const {cart} = useContext(CartContext)

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Item</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Importe</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {
                  cart.map( (item, i) => (
                     < CartTableItem
                        key={item.id}
                        item={i+1}
                        productRecibed={cart[i]}
                     />
                  ))
               }
            </tbody>
         </table>
      </div>
   )
}
