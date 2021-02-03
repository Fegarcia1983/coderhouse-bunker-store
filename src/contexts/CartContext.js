import React, { useState } from 'react'

export const CartContext = React.createContext([])

export const Context = ( { children } ) => {

   const [ cart, setCart] = useState([]);

   const itemsInCart = cart.length;

   const qtyInCart = cart.reduce(( acc, curr) => { return acc + curr.qty},0)

   const totalInCart = cart.reduce(( acc, curr) => { return acc + curr.product.price * curr.qty},0)

   const addOrder = ( order ) => {
      if (cart.find( item => item.product.id === order.product.id)) {
         alert('Este material ya se encuentra en el carrito de compra, para modificar la cantidad a comprar ve al carrito')
      } else {
         setCart([
            ...cart,
            order
         ])
      }
   }

   const deleteItem = ( item, toDel=1 ) => {
      let newCart = [...cart]
      newCart.splice(item-1,toDel)
      setCart(newCart)
   }

   const changeQty = ( item, direction ) => {
      let newCart = [...cart]
      if ( direction === 'up' && cart[item-1].product.stock > newCart[item-1].qty ) {
         newCart[item-1].qty = newCart[item-1].qty+1
         setCart(newCart)
      }
         if ( direction === 'down' && newCart[item-1].qty > 1 ) {
         newCart[item-1].qty = newCart[item-1].qty-1
         setCart(newCart)
      }
   }

   return(
      < CartContext.Provider value={ { cart, itemsInCart, addOrder, qtyInCart, deleteItem, totalInCart, changeQty } } >
         { children }
      </ CartContext.Provider >
   )
}