import React, {useState, useEffect} from 'react'
import { ItemList } from '../item-list/ItemList'
import { getFirestore } from '../../../firebase'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

   const [ state, setState] = useState( {
      products: []
   } )

   const {products} = state

   const { id:categoryId } = useParams();

   useEffect( () => {

      const db = getFirestore();
      const itemCollection =  !categoryId ? db.collection('items') : db.collection('items').where('category_id', '==', categoryId)
      itemCollection.get()
      .then((querySnapshot) => {
         if( querySnapshot.size === 0 ) {
            console.log('No results!')
         }
         let products = (querySnapshot.docs.map(doc => {
            return({
               id: doc.id,
               ...doc.data()
            })
         }))
         setState( {
            ...state,
            products: products
         } )
      }).catch((error) => {
         console.log('Error searching items', error);
      })
      return () => {
         setState( {
            products: []
         } )
      }
   }, [categoryId])

   return (
      <div className='fg-mainBody'>
         < ItemList products={ products }/>
      </div>
   )
}
