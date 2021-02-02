import React from 'react'
import { ItemDetail } from '../item-detail/ItemDetail'
import './itemDetailContainer.css'

export const ItemDetailContainer = ({location}) => {

   const {product} = location.product;

   return (
      <div className="fg-mainBody">
         < ItemDetail product={product} />
      </div>
   )
}
