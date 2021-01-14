import React, {useState, useEffect} from 'react'
import './itemList.css';
import { Item } from './Item'

export const ItemList = () => {

   const [prod, setProd] = useState([])
   const products = [{
      id: 1,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 1',
      title: 'Articulo Numero 1',
      price: 100.00,
      description: 'descripcion del articulo 1'
   }, {
      id: 2,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 2',
      title: 'Articulo Numero 2',
      price: 200.00,
      description: 'descripcion del articulo 2'
   }];

   useEffect(() => {
      const noFetch = new Promise ((res, rej) => {
         setTimeout(() => res(products),5000)
      });
      noFetch.then(prod => {
         setProd(prod);
      })
   }, [])


   return (
      <div className="fg-itemList">
         {
            prod.map(prod => <Item
               imgSrc= {prod.imgSrc}
               imgAlt= {prod.imgAlt}
               title= {prod.title}
               price= {prod.price}
               description= {prod.description}
               />
            )
         }
      </div>
   )
}
