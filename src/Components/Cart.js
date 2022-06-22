import React,{useContext}from 'react'
import CartContext from '../Context/CartContext'
import Carts from './Carts'


const Cart = () => {
    const {itemsCarts,showCarts,showHideCarts} = useContext(CartContext)

  return (
    <>
    {itemsCarts.length === 0 ? <h1>DataKosong</h1> : <Carts/>}

    </>
  )
}

export default Cart