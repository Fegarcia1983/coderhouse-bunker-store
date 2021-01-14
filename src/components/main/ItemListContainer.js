import React from 'react'
import './itemListContainer.css'
import { ItemList } from './ItemList'

export const ItemListContainer = ({greeting}) => {
   return (
      <div className='fg-mainBody'>
         < ItemList />
      </div>
   )
}
