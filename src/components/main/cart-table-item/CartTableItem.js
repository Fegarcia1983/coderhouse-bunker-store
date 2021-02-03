import React from 'react'
import { CartDeleteButton } from '../cart-delete-button/CartDeleteButton'
import { CartChangeQty } from '../cart-change-qty/CartChangeQty'

export const CartTableItem = ({ item, productRecibed }) => {

   const { product, qty } = productRecibed

   return (
      <tr>
         <td>{item}</td>
         <td><img src={product.imgSrc} alt={product.imgAlt} /></td>
         <td className="fg-cartDescription">{product.description}</td>
         <td>{(product.price).toFixed(2)}</td>
         <td>< CartChangeQty item={ item }/></td>
         <td>{(qty*product.price).toFixed(2)}</td>
         <td>< CartDeleteButton item={ item } /></td>
      </tr>
   )
}
