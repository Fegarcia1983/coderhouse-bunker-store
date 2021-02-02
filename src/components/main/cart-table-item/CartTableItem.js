import React from 'react'

export const CartTableItem = ({ item, productRecibed }) => {

   const { product, qty } = productRecibed

   return (
      <tr>
         <td>{item}</td>
         <td><img src={product.imgSrc} alt={product.imgAlt} /></td>
         <td>{product.description}</td>
         <td>{(product.price).toFixed(2)}</td>
         <td>{qty}</td>
         <td>{(qty*product.price).toFixed(2)}</td>
         <button>Borrar</button>
      </tr>
   )
}
