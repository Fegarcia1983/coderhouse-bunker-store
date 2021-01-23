import React from 'react';
import { Link } from 'react-router-dom'
import './item.css';

export const Item = ({imgSrc, imgAlt, title, brand,  price, description, id}) => {
   return (
      <div className="fg-itemCard">
         <Link to={{
            pathname: `/products/${id}`,
            product: {
               imgSrc: imgSrc,
               title: title,
               brand: brand,
               price: price,
               description: description
            }
         }} >
            <img src={imgSrc} alt={imgAlt} />
            <h4>{title}</h4>
            <h5>{brand}</h5>
            <p>${price}</p>
            <p className="fg-description">{description}</p>
         </Link>
      </div>
   )
}
