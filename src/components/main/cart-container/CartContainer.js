import React from 'react'
import { BuyForm } from '../buy-form/BuyForm'
import { CartTable } from '../cart-table/CartTable'
import './cartContainer.css'

export const CartContainer = () => {
   return (
      <div className="fg-cartContainer">
         < CartTable />
         < BuyForm />
      </div>
   )
}
