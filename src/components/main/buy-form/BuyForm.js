import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { getFirestore } from '../../../firebase'
import firebase from 'firebase/app'


export const BuyForm = () => {

   const [info, setInfo] = useState({
      name: "",
      phone: "",
      mail: ""
   });
   const [ order, setOrder ] = useState({})
   const [ orderId, setOrderId ] = useState('')

   const { cart, totalInCart } = useContext(CartContext)

   const { name, phone, mail } = info;

   useEffect(() => {
      setOrder({
         buyer: info,
         items: cart,
         date: firebase.firestore.Timestamp.fromDate(new Date()),
         total: totalInCart
      })
   }, [totalInCart, info])

   function handleChange(e) {
   setInfo({
      ...info,
      [e.target.name]: e.target.value
   });
   }

   function handleSubmit(e) {
      e.preventDefault()
      const db = getFirestore()
      const orderDb = db.collection('orders')
      orderDb.add(order)
         .then(({id}) => {
            setOrderId(id)
            order.items.forEach( item => {
               const itemDb = db.collection('items')
               let documento = itemDb.doc(item.product.id)
               let actualStock = item.product.stock - item.qty
               documento.update({stock: actualStock})
            })
         })
         .catch((error) => console.log('Error: ',error))
   }

   return (
      <form className="fg-buyForm">
         <h3>Finaliza tu compra</h3>
         <hr/>
         <div className="fg-buyFormInfo">
            <label htmlFor="name">Nombre</label>
            <input name="name" type="text" onChange={ handleChange }></input>
            <label htmlFor="phone">Teléfono</label>
            <input name="phone" type="text" onChange={ handleChange }></input>
            <label htmlFor="mail">Mail</label>
            <input name="mail" type="text" onChange={ handleChange }></input>
         </div>
         <button
         disabled={
            !( name && phone && mail )
          }
          onClick={ handleSubmit }
          >Let's do it</button>
         <p hidden={
            ( name && phone && mail )
          }>Completa los datos para poder efectuar la compra</p>
      </form>
   )
}
