import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCountContainer } from '../item-count-container/ItemCountContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './itemDetail.css'


export const ItemDetail = ( { product } ) => {

   const backIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x'/>

   return (
      <div className="fg-itemDetail">
         <div className="fg-itemDetailUp">
            <Link to={'/'} className="fg-backButton">{backIcon}</Link>
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
         < ItemCountContainer product={ product }/>
      </div>
   )
}
