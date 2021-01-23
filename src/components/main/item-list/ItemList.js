import React, {useState, useEffect} from 'react'
import './itemList.css';
import { Item } from '../item/Item'

export const ItemList = () => {

   const [prod, setProd] = useState([])

   const products = [{
      id: 1,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 1',
      title: 'Articulo Numero 1',
      brand: 'Marca del artículo número 1',
      price: 100.00,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. '
   }, {
      id: 2,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 2',
      title: 'Articulo Numero 2',
      brand: 'Marca del artículo número 2',
      price: 200.00,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. '
   }, {
      id: 3,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 3',
      title: 'Articulo Numero 3',
      brand: 'Marca del artículo número 3',
      price: 300.00,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod.'
   }, {
      id: 4,
      imgSrc: 'https://placeimg.com/500/500/any',
      imgAlt: 'Imagen articulo 4',
      title: 'Articulo Numero 4',
      brand: 'Marca del artículo número 4',
      price: 400.00,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. '
   }];

   useEffect(() => {
      const noFetch = new Promise ((res, rej) => {
         setTimeout(() => res(products),2000)
      });
      noFetch.then(prod => {
         setProd(prod);
      })
   }, [])

   return (
      <div className="fg-itemList">
         {
            prod.map(prod =>
               <Item
               key={prod.id}
               imgSrc= {prod.imgSrc}
               imgAlt= {prod.imgAlt}
               title= {prod.title}
               brand= {prod.brand}
               price= {prod.price}
               description= {prod.description}
               id={prod.id}
               />
            )
         }
      </div>
   )
}
