import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <div class="carrito">    
        <span className="material-symbols-outlined cart">shopping_cart</span>
        <p class="cantCompra">0</p>
    </div>
  )
}

