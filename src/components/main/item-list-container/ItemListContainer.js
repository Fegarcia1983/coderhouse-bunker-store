import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../item-list/ItemList'
import './itemListContainer.css'

export const ItemListContainer = () => {

   const [ state, setState] = useState( {
      products: []
   } )

   const {products} = state

   const params = useParams()

   useEffect( () => {
      const products = [ {
         id: 1,
         imgSrc: 'https://bbts1.azureedge.net/images/p/full/2017/09/388b8f15-64d6-4800-90c3-c2252cd76a81.jpg',
         imgAlt: 'lucille_image',
         title: 'Lucille',
         brand: 'Negan`s Industries',
         price: 100.00,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. ',
         category_id: 1
      }, {
         id: 2,
         imgSrc: 'https://i.pinimg.com/originals/d4/bb/6d/d4bb6ddb37d6447c99cde2c60136e264.jpg',
         imgAlt: 'crossbow_image',
         title: 'Crossbow',
         brand: 'Daryl`s Dixon Industries',
         price: 200.00,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. ',
         category_id: 2
      }, {
         id: 3,
         imgSrc: 'https://ae01.alicdn.com/kf/HTB16RcrLFXXXXabXVXXq6xXFXXXG/Funda-de-acero-plegado-Damasco-Walking-Dead-Michonne-Sword-Katana-r-plica.jpg',
         imgAlt: 'katana-image',
         title: 'Katana',
         brand: 'Michonne`s Industries',
         price: 300.00,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. ',
         category_id: 1
      }, {
         id: 4,
         imgSrc: 'https://cdn11.bigcommerce.com/s-2cqhy8s7s9/images/stencil/1280x1280/products/452480/311945/119658__21568.1603951966.jpg?c=2',
         imgAlt: 'colt_python_image',
         title: 'Colt Python 357 Magnum',
         brand: 'Colt`s Manufacturing Company',
         price: 400.00,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lobortis justo, vitae tempus nulla. Donec sed pharetra turpis. Cras eget mauris at turpis mattis rutrum. Morbi vitae volutpat erat. Integer quis elit porttitor, efficitur ex id, cursus massa. Etiam mattis viverra ante et ornare. Aliquam erat volutpat. Pellentesque euismod. ',
         category_id: 2
      } ];

      let productsF = []

      if (params.id !== undefined) {
         productsF = products.filter( producto => producto.category_id === Number(params.id))
      } else {
         productsF = [...products]
      }

      const noFetch = new Promise ((res, rej) => {
         setTimeout(() => res(productsF),2000)
      });
      noFetch.then(products => {
         setState( {
            ...state,
            products: products
         } )
      } )

      return () => {
         setState( {
            products: []
         } )
      }
   }, [params])

   return (
      <div className='fg-mainBody'>
         < ItemList products={ products }/>
      </div>
   )
}
