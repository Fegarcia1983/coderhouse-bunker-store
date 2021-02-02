import React, { useState } from 'react'

export const CartContext = React.createContext([])

export const Context = ( { children } ) => {

   const [ cart, setCart] = useState([]);

   const itemsInCart = cart.length;

   const qtyInCart = cart.reduce(( acc, curr) => { return acc + curr.qty},0)

   const addOrder = ( order ) => {
      if (itemsInCart === 0) {
         setCart([
            ...cart,
            order
         ])
      } else if (cart.find( item => item.product.id === order.product.id)) {
         alert('Este material ya se encuentra en el carrito de compra, para modificar la cantidad a comprar ve al carrito')
      } else {
         setCart([
            ...cart,
            order
         ])
      }
   }

   return(
      < CartContext.Provider value={ { cart, itemsInCart, addOrder, qtyInCart } } >
         { children }
      </ CartContext.Provider >
   )
}