import React from 'react'
import './itemListContainer.css'
import { ItemList } from '../item-list/ItemList'

export const ItemListContainer = ({greeting}) => {
   return (
      <div className='fg-mainBody'>
         < ItemList />
      </div>
   )
}
