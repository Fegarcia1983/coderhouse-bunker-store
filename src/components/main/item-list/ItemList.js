import React from 'react'

import { Item } from '../item/Item'

import './itemList.css';

export const ItemList = ({products}) => {

   return (
      <div className="fg-itemList">
         {
            products.map(prod =>
               <Item
               key={prod.id}
               product={prod}
               />
            )
         }
      </div>
   )
}
