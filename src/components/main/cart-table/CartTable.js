import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import { CartTableItem } from '../cart-table-item/CartTableItem'
import emptyCart from '../../../assets/images/emptyCart.jpg'

export const CartTable = () => {

   const {cart, qtyInCart, totalInCart, deleteItem } = useContext(CartContext)

   return (
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
               qtyInCart>0?
               cart.map( (item, i) => (
                  < CartTableItem
                     key={item.product.id}
                     item={i+1}
                     productRecibed={cart[i]}
                  />
               ))
               :
               <tr>
                  <td className="fg-emtyCart" colSpan="7">< Link to="/"><img src={emptyCart} alt="emptyCart" /><span className="fg-emtyCartMsg">TU CARRITO SE ENCUENTRA VACÍO HAS CLICK AQUÍ PARA COMPRAR</span></Link></td>
               </tr>
            }
            {
               qtyInCart > 0 &&
               <tr>
                  <td colSpan="5">Total</td>
                  <td>{(totalInCart).toFixed(2)}</td>
                  <td><button className="fg-cartDelete" onClick={ () => deleteItem(1, qtyInCart) }>Clear All</button></td>
               </tr>
            }
         </tbody>
      </table>
   )
}
