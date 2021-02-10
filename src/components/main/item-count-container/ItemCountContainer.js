import React, { useContext, useEffect, useState } from 'react'
import { ItemCount } from '../item-count/ItemCount'
import { CartContext } from '../../../contexts/CartContext'
import './itemCountContainer.css'

export const ItemCountContainer = ( { product } ) => {

   console.log(product);

   const { addOrder } = useContext(CartContext);

   const [order, setOrder] = useState({
      product: product,
      qty:0
   });

   useEffect(() => {
      setOrder({
         ...order,
         product: product,
      })
   }, [product])

   const { qty } = order;

   const addQtyHandler = () => {
      (qty!==product.stock) &&
      setOrder({
         ...order,
         qty: qty + 1
      })
   }

   const subQtyHandler = () => {
      (qty!==0) &&
      setOrder({
         ...order,
         qty: qty - 1
      })
   }

   console.log(order);

   return (
      <div className="fg-counter">
         < ItemCount stock={ product.stock } order={ order } addQtyHandler={addQtyHandler} subQtyHandler={subQtyHandler}/>
         <div>
            <p>Stock: { product.stock }</p>
         </div>
         <div className="fg-buyButtonContainer">
            {
               qty>0 &&
               <button className="fg-buyButton" onClick={()=>addOrder(order)}>I want {qty}!!! </button>
            }
         </div>
      </div>
   )
}
