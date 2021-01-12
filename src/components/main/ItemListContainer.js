import React from 'react'
import { ItemCount } from './ItemCount'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {
   return (
      <div className='fg-mainBody'>
         < ItemCount stock={8} initial={2} onAdd={2} />
         < ItemCount stock={20} initial={1} onAdd={1} />
         < ItemCount stock={11} initial={1} onAdd={1} />
      </div>
   )
}
