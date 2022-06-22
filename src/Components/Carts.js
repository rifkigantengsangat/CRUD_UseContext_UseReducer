import React,{useContext} from 'react'
import CartContext from '../Context/CartContext'

const Carts = () => {
    const {itemsCarts,removeProd} = useContext(CartContext) 
  return (
    <div>{
        itemsCarts.map(item =>{
            return <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <button onClick={()=>removeProd(item.id)}>Hapu</button>
            </div>
        })
        }</div>
  )
}

export default Carts