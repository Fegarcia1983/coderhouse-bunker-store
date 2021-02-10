import React from 'react';
import { Link } from 'react-router-dom'
import './item.css';

export const Item = ({product}) => {

   return (
      <div className="fg-itemCard">
         <Link to={`/products/${product.id}`} >
            <img src={product.imgSrc} alt={product.imgAlt} />
            <h4>{product.title}</h4>
            <h5>{product.brand}</h5>
            <p>${product.price}</p>
            <p className="fg-description">{product.description}</p>
         </Link>
      </div>
   )
}
