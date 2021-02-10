import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../item-detail/ItemDetail'
import { getFirestore } from '../../../firebase'
import './itemDetailContainer.css'

export const ItemDetailContainer = () => {

   const [state, setState ] = useState( {
      product: []
   } )

   const { product } = state

   const { id:searchedId } = useParams()

   useEffect( () => {

      const db = getFirestore();
      const item = db.collection('items').doc(searchedId)
      item.get()
      .then((doc) => {
         if( !doc.exists ) {
            console.log('No results!')
            return
         }
         setState( {
            id: doc.id,
            ...doc.data()
         } )
      }).catch((error) => {
         console.log('Error searching the product', error);
      })
   }, [])

   return (
      <div className="fg-mainBody">
         < ItemDetail product={state} />
      </div>
   )
}
