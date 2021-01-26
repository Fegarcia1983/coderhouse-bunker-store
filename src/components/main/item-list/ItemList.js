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
               imgSrc= {prod.imgSrc}
               imgAlt= {prod.title}
               title= {prod.title}
               price= {prod.price}
               description= {prod.description}
               brand= {prod.brand}
               id={prod.id}
               />
            )
         }
      </div>
   )
}
