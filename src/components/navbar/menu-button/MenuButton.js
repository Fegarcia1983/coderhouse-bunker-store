import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../../firebase'
import './menubutton.css'

export const MenuButton = () => {
   const menuIcon = <FontAwesomeIcon icon={faBars} color='#E9E9E9E9'/>

   const [state, setState] = useState( {
      categories: []
   } )

   const {categories} = state

   useEffect( () => {

      const db = getFirestore();
      const itemCollection = db.collection('categories')
      itemCollection.get()
      .then((querySnapshot) => {
         if( querySnapshot.size === 0 ) {
            console.log('No results!')
         }
         let categories = (querySnapshot.docs.map(doc => {
            return({
               id: doc.id,
               ...doc.data()
            })
         }))
         setState( {
            ...state,
            categories: categories
         } )
      }).catch((error) => {
         console.log('Error searching categories', error);
      })
      return () => {
         setState( {
            categories: []
         } )
      }
   }, [])

   return (
      <div className="dropdown">
         <div className="dropbtn"><span>{menuIcon}</span>MENU</div>
            <div className="dropdown-content">
               <Link to={'/'}>home</Link>
               <Link to={'/products'}>productos</Link>
               <Link to={'/us'}>nosotros</Link>
               <Dropdown.Divider />
               {
                  categories.map( cat =>
                     <Link
                     key={cat.id}
                     to={`/category/${cat.id}`}
                     >{cat.name}
                     </Link>
                  )

               }
            </div>
      </div>
   )
   }
