import React from 'react';
import './item.css';

export const Item = ({imgSrc, imgAlt, title, price, description}) => {
   return (
      <div className="fg-itemCard">
         <img src={imgSrc} alt={imgAlt} />
         <h4>{title}</h4>
         <p>${price}</p>
         <p>{description}</p>
      </div>
   )
}
