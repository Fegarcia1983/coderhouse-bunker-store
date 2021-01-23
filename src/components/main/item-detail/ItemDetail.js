import React from 'react'
import './itemDetail.css'

export const ItemDetail = ({product}) => {
   return (
      <div className="fg-itemDetail">
         <div className="fg-itemDetailUp">
            <div className="fg-itemDetailImg">
               <img src={product.imgSrc} alt={product.imgAlt} />
            </div>
            <div className="fg-itemdetails">
               <h3>{product.title}</h3>
               <h4>{product.brand}</h4>
               <p>${product.price}</p>
            </div>
         </div>
         <div>
            <p className="fg-itemDetailDescription">{product.description}</p>
         </div>
      </div>
   )
}
