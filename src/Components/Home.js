import React,{useContext,useEffect,useState} from 'react'
import dataContext from '../Context/dataContext'
import CartContext from '../Context/CartContext'
import Cart from './Cart'
const Home = () => {
  const [open,setOpen] = useState(false)
  const[data,setData] = useState([])
 
    const {state,dispatch} = useContext(dataContext)
  const {addProd,showCarts,showHideCarts,itemsCarts} = useContext(CartContext)


  return (
    <div>

        <h1>{itemsCarts.length}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT' })}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
         <button onClick={showHideCarts}>open</button>
         {showCarts &&<Cart/>}
        {state.data.map((e)=>{
          return(
            <div key={e.id}>
              <h1>{e.title}</h1>
              <p>{e.body}</p>
              <button onClick={()=>{addProd(e)}}>Tambah</button>
            </div>
          )
        })}
        
    </div>
  )
}

export default Home